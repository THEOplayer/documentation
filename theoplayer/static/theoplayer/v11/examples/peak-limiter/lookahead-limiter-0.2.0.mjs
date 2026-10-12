/*!
 * @synthlet/lookahead-limiter 0.2.0
 * https://github.com/danigb/synthlet/tree/main/packages/lookahead-limiter
 * Copyright (c) danigb. Released under the MIT License.
 */
// src/_worklet.ts
function createWorkletConstructor(options) {
  const paramNames = options.descriptors.map((d) => d.name);
  const create2 = (audioContext, inputs = {}) => {
    const node = new AudioWorkletNode(
      audioContext,
      options.processorName,
      options.workletOptions(inputs)
    );
    node.__PROCESSOR_NAME__ = options.processorName;
    const connected = connectParams(node, paramNames, inputs);
    options.postCreate?.(node);
    return disposable(node, connected);
  };
  return Object.assign(create2, { descriptors: options.descriptors });
}
function connectParams(node, paramNames, inputs) {
  const connected = [];
  for (const paramName of paramNames) {
    if (node.parameters) {
      node[paramName] = node.parameters.get(paramName);
    }
    const param = node[paramName];
    if (!param) throw Error("Invalid param name: " + paramName);
    const input = inputs[paramName];
    if (typeof input === "number") {
      param.value = input;
    } else if (input instanceof AudioNode) {
      param.value = 0;
      input.connect(param);
      connected.push(input);
    } else if (typeof input === "function") {
      param.value = 0;
      const source = input(node.context);
      source.connect(param);
      connected.push(source);
    }
  }
  return connected;
}
function disposable(node, dependencies) {
  const previousDispose = node.dispose;
  let disposed = false;
  return Object.assign(node, {
    dispose() {
      if (disposed) return;
      disposed = true;
      previousDispose?.call(node);
      node.disconnect();
      node.port?.postMessage({ type: "DISPOSE" });
      if (!dependencies) return;
      while (dependencies.length) {
        const conn = dependencies.pop();
        if (conn instanceof AudioNode) {
          if (typeof conn.dispose === "function") {
            conn.dispose?.();
          } else {
            conn.disconnect();
          }
        } else if (typeof conn === "function") {
          conn();
        }
      }
    }
  });
}
function Compound(options) {
  return disposable(
    Object.assign(options.output, options.exposes),
    options.owns
  );
}
function createRegistrar(processorName, processor) {
  return function(context) {
    const key = "__" + processorName + "__";
    if (key in context) return context[key];
    if (!context.audioWorklet || !context.audioWorklet.addModule) {
      throw Error("AudioWorklet not supported");
    }
    const blob = new Blob([processor], { type: "application/javascript" });
    const url = URL.createObjectURL(blob);
    const promise = context.audioWorklet.addModule(url);
    context[key] = promise;
    return promise;
  };
}

// src/dsp.ts
var TP_PHASES = 4;
var TP_TAPS = 48;
var TP_HISTORY = TP_TAPS / TP_PHASES;
var TP_DELAY = 6;
var DEFAULT_LOOKAHEAD_MS = 2;
var MIN_LOOKAHEAD_MS = 0.5;
var MAX_LOOKAHEAD_MS = 5;
function lookaheadSamples(ms, sampleRate) {
  const clamped = Math.min(MAX_LOOKAHEAD_MS, Math.max(MIN_LOOKAHEAD_MS, ms));
  return Math.max(1, Math.round(clamped * sampleRate / 1e3));
}
function latencySamples(ms, sampleRate) {
  return lookaheadSamples(ms, sampleRate) + TP_DELAY;
}
var PHASE_TAPS = (() => {
  const phases = [];
  for (let p = 0; p < TP_PHASES; p++) phases.push(new Float64Array(TP_HISTORY));
  for (let j = 0; j < TP_TAPS; j++) {
    const window = 0.5 * (1 - Math.cos(2 * Math.PI * j / TP_TAPS));
    const m = j - TP_TAPS / 2;
    const arg = m * Math.PI / TP_PHASES;
    const tap = Math.abs(m) > 1e-6 ? window * Math.sin(arg) / arg : window;
    phases[j % TP_PHASES][j / TP_PHASES | 0] = tap;
  }
  return phases;
})();

// src/params.ts
var PARAMS = [
  {
    // The true-peak ceiling, in dBTP. a-rate: automating it is safe, though a
    // downward move takes `lookahead` samples to reach the smoothed gain. The
    // backstop reads the current value, so the hard bound holds instantly.
    name: "threshold",
    defaultValue: -1,
    minValue: -24,
    maxValue: 0,
    automationRate: "a-rate"
  },
  {
    // Milliseconds for 10-90% recovery (not a time constant). k-rate only
    // because nobody automates a limiter's release at audio rate - the proof
    // survives any per-sample coefficient in [0, 1).
    name: "release",
    defaultValue: 168,
    minValue: 10,
    maxValue: 1e3,
    automationRate: "k-rate"
  },
  {
    // Input drive in dB, applied *before* the detector and the delay line.
    // Never a makeup gain: multiplying after the ceiling is enforced would
    // break the guarantee outright.
    name: "gain",
    defaultValue: 0,
    minValue: -12,
    maxValue: 24,
    automationRate: "a-rate"
  }
];

// src/processor.ts
var PROCESSOR = `"use strict";(()=>{function J(n,t){let e=Math.min(5,Math.max(.5,n));return Math.max(1,Math.round(e*t/1e3))}var y=n=>Math.pow(10,n/20),Q=(()=>{let n=[];for(let t=0;t<4;t++)n.push(new Float64Array(12));for(let t=0;t<48;t++){let e=.5*(1-Math.cos(2*Math.PI*t/48)),r=t-48/2,o=r*Math.PI/4,s=Math.abs(r)>1e-6?e*Math.sin(o)/o:e;n[t%4][t/4|0]=s}return n})();function K(n,t){let e=J(t,n),r=e+6,o=Z(),s=tt(e+1),i=1,m=1,u=-1,S=0,l=new Float64Array(e).fill(1),P=0,A=e,X=0,M=[],_=0,x=1,g=0,E=0;function O(d,R,H,D,I,w){let p=R.length;if(p===0)return;let F=d.length,j=F>0?d[0].length:R[0].length;for(;M.length<p;)M.push(new Float32Array(r));if(o.channels(p),D!==u){u=D;let c=Math.max(.1,D/3.3579)/1e3;S=Math.exp(-1/(n*c))}let k=S,G=H.length>1,q=I.length>1,h=y(H[0]),L=y(I[0]);for(let c=0;c<j;c++){G&&(h=y(H[c])),q&&(L=y(I[c])),o.advance();for(let a=0;a<p;a++){let b=a<F?Math.fround(d[a][c]*L):0;o.write(a,b)}let v=o.peak(p),z=v<=h?1:h/v,W=s(z);i=U(W,i,k),m=U(i,m,k);let $=l[P];if(l[P]=m,P=P+1===e?0:P+1,A+=m-$,++X%4096===0){A=0;for(let a=0;a<e;a++)A+=l[a]}let f=A/e;f<x&&(x=f),w&&(w[c]=f);for(let a=0;a<p;a++){let b=M[a],V=b[_];b[_]=a<F?Math.fround(d[a][c]*L):0;let T=f===1?V:V*f,C=T<0?-T:T;if(C>h){g++;let N=(C-h)/h;N>E&&(E=N),T=T>0?h:-h}R[a][c]=T}_=_+1===r?0:_+1}}return O.stats=()=>({minGain:x,clampCount:g,maxOvershoot:E}),O.latency=r,O}function Z(){let n=[],t=0;return{channels(e){for(;n.length<e;)n.push(new Float64Array(12))},advance(){t=t+1===12?0:t+1},write(e,r){n[e][t]=r},peak(e){let r=0;for(let o=0;o<e;o++){let s=n[o],i=s[(t+12-6)%12],m=i<0?-i:i;m>r&&(r=m);for(let u=0;u<4;u++){let S=Q[u],l=0;for(let A=0;A<12;A++)l+=S[A]*s[(t+12-A)%12];let P=l<0?-l:l;P>r&&(r=P)}}return r}}}function tt(n){let t=n+1,e=new Float64Array(t),r=new Float64Array(t),o=0,s=0,i=0;return function(u){let S=i++;for(;s>0&&r[(o+s-1)%t]>=u;)s--;let l=(o+s)%t;return e[l]=S,r[l]=u,s++,e[o]+n<=S&&(o=(o+1)%t,s--),r[o]}}function U(n,t,e){if(n<t)return n;let r=n+(t-n)*e;return n===1&&1-r<1e-12?1:r}var B=[{name:"threshold",defaultValue:-1,minValue:-24,maxValue:0,automationRate:"a-rate"},{name:"release",defaultValue:168,minValue:10,maxValue:1e3,automationRate:"k-rate"},{name:"gain",defaultValue:0,minValue:-12,maxValue:24,automationRate:"a-rate"}];var Y=class extends AudioWorkletProcessor{p;r=!0;constructor(t){super();let e=t?.processorOptions?.lookahead??2;this.p=K(sampleRate,e),this.port.onmessage=r=>{switch(r.data.type){case"DISPOSE":this.r=!1;break}}}process(t,e,r){return this.p(t[0],e[0],r.threshold,r.release[0],r.gain),this.r}static get parameterDescriptors(){return B}};registerProcessor("LookaheadLimiterProcessor",Y);})();`;

// src/index.ts
var registerLookaheadLimiterWorklet = createRegistrar(
  "LOOKAHEAD_LIMITER",
  PROCESSOR
);
var create = createWorkletConstructor({
  processorName: "LookaheadLimiterProcessor",
  descriptors: PARAMS,
  workletOptions: (inputs) => ({
    numberOfInputs: 1,
    numberOfOutputs: 1,
    // No outputChannelCount: the limiter follows its input's channel count.
    processorOptions: { lookahead: inputs.lookahead ?? DEFAULT_LOOKAHEAD_MS }
  })
});
var LookaheadLimiter = Object.assign(
  (context, inputs = {}) => {
    const node = create(context, inputs);
    const samples = latencySamples(
      inputs.lookahead ?? DEFAULT_LOOKAHEAD_MS,
      context.sampleRate
    );
    return Object.assign(node, {
      latencySamples: samples,
      latencyTime: samples / context.sampleRate
    });
  },
  { descriptors: PARAMS }
);
export {
  Compound,
  LookaheadLimiter,
  disposable,
  registerLookaheadLimiterWorklet
};
