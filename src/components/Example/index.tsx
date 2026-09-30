import React, { type ComponentPropsWithoutRef, type JSX, type Ref, useEffect, useImperativeHandle, useRef } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * A message exchanged between a demo page and its example iframe.
 */
export interface ExampleMessage {
  type: string;
  [key: string]: unknown;
}

export interface ExampleController {
  /**
   * Send a message to the example iframe.
   */
  postMessage(message: ExampleMessage): void;
}

export interface ExampleProps extends ComponentPropsWithoutRef<'iframe'> {
  ref?: Ref<ExampleController> | undefined;
  /**
   * Called when the example iframe sends a message to the demo page.
   */
  onMessage?: (message: ExampleMessage) => void;
  /**
   * Whether to expose the iframe's `player` and `THEOplayer` variables on the demo page's `window`,
   * so they can be used from the browser's developer console.
   *
   * @defaultValue `true`
   */
  exposeGlobals?: boolean;
}

const GLOBALS = ['player', 'THEOplayer'] as const;

type ExampleWindow = Window & Partial<Record<(typeof GLOBALS)[number], unknown>>;

const DEFAULT_ALLOW = 'autoplay; fullscreen; encrypted-media; picture-in-picture; xr-spatial-tracking; accelerometer; gyroscope';

export default function Example({ ref, onMessage, exposeGlobals = true, className, allow = DEFAULT_ALLOW, ...props }: ExampleProps): JSX.Element {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const onMessageRef = useRef(onMessage);
  useEffect(() => {
    onMessageRef.current = onMessage;
  }, [onMessage]);

  useImperativeHandle(ref, () => {
    return {
      postMessage(message: ExampleMessage) {
        iframeRef.current?.contentWindow?.postMessage(message, window.location.origin);
      },
    };
  }, []);

  // Receive messages from the iframe
  useEffect(() => {
    const listener = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (!iframeRef.current || event.source !== iframeRef.current.contentWindow) return;
      const data = event.data;
      if (typeof data !== 'object' || data == null || typeof data.type !== 'string') return;
      onMessageRef.current?.(data as ExampleMessage);
    };
    window.addEventListener('message', listener);
    const iframe = iframeRef.current;
    const connect = () => iframe?.contentWindow?.postMessage({ type: 'example-connect' }, window.location.origin);
    iframe?.addEventListener('load', connect);
    connect();
    return () => {
      window.removeEventListener('message', listener);
      iframe?.removeEventListener('load', connect);
    };
  }, []);

  // Expose `player` and `THEOplayer` from the iframe on this page
  useEffect(() => {
    if (!exposeGlobals) return;
    for (const name of GLOBALS) {
      Object.defineProperty(window, name, {
        configurable: true,
        enumerable: false,
        get: () => (iframeRef.current?.contentWindow as ExampleWindow | null | undefined)?.[name],
      });
    }
    return () => {
      for (const name of GLOBALS) {
        delete (window as ExampleWindow)[name];
      }
    };
  }, [exposeGlobals]);

  return (
    <>
      <iframe ref={iframeRef} className={clsx(styles.player, className)} allow={allow} {...props}></iframe>
      {exposeGlobals && (
        <p className={styles.tip}>
          Tip: open your browser&apos;s developer console and use the <code>player</code> and <code>THEOplayer</code> variables to interact with this
          demo.
        </p>
      )}
    </>
  );
}
