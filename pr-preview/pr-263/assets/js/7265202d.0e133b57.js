"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["59676"],{1355:function(e,t,i){i.r(t),i.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"client-sdks/desktop/desktop-getting-started-with-publishing","title":"Getting Started with Publishing","description":"Follow these steps to add the publishing capability to your application.","source":"@site/millicast/client-sdks/desktop/desktop-getting-started-with-publishing.md","sourceDirName":"client-sdks/desktop","slug":"/desktop-getting-started-with-publishing","permalink":"/documentation/pr-preview/pr-263/millicast/desktop-getting-started-with-publishing","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/client-sdks/desktop/desktop-getting-started-with-publishing.md","tags":[],"version":"current","frontMatter":{"title":"Getting Started with Publishing","slug":"/desktop-getting-started-with-publishing"},"sidebar":"millicast","previous":{"title":"Building Test Applications","permalink":"/documentation/pr-preview/pr-263/millicast/desktop-building-test-applications"},"next":{"title":"Getting Started with Subscribing","permalink":"/documentation/pr-preview/pr-263/millicast/desktop-getting-started-with-subscribing"}}'),n=i("85893"),a=i("50065");let o={title:"Getting Started with Publishing",slug:"/desktop-getting-started-with-publishing"},r=void 0,l={},c=[{value:"1. Capture audio and video",id:"1-capture-audio-and-video",level:2},{value:"2. Set logger",id:"2-set-logger",level:2},{value:"3. Publish a stream",id:"3-publish-a-stream",level:2},{value:"4. Configure your publishing session",id:"4-configure-your-publishing-session",level:2},{value:"5. Add the audio and video track",id:"5-add-the-audio-and-video-track",level:2},{value:"6. Authenticate using the Director API",id:"6-authenticate-using-the-director-api",level:2},{value:"7. Start publishing",id:"7-start-publishing",level:2},{value:"Collecting RTC statistics",id:"collecting-rtc-statistics",level:2}];function d(e){let t={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Follow these steps to add the publishing capability to your application."}),"\n",(0,n.jsx)(t.h2,{id:"1-capture-audio-and-video",children:"1. Capture audio and video"}),"\n",(0,n.jsx)(t.p,{children:"To capture media, get an array of available audio and video sources and choose the preferred sources from the list. After you start capturing audio and video, the SDK will return an audio and video track that you can add to the publisher later."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cplusplus",children:"// Get an array of audio sources\nauto sources = millicast::Media::get_audio_sources();\n\n// Choose the preferred audio source and start capturing\nauto src = sources[0]; // Get the first available source\nauto audioTrack = src->start_capture();\nif(audioTrack == nullptr)\n{\n 	// Error could not start capture\n}\n\n// Get an array of available video sources\nauto sources = millicast::Media::get_video_sources();\n\n// Get capabilities of the available video sources, such as width, height, and frame rate of the video sources\nauto capabilities = sources[0]->capabilities(); // Get the capabilities of first source\n\n// Set the preferred capability; not setting any capability object results in setting the first one from the list\nsource[0]->set_capability(capabilities[0]); // Set the first capability object\n\n// Start capturing video\nauto src = sources[0]; // Get the first available source\nauto vidoeTrack = src->start_capture();\nif(videoTrack == nullptr)\n{\n 	// Error could not start capture\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"2-set-logger",children:"2. Set logger"}),"\n",(0,n.jsx)(t.p,{children:"Optionally, set your own logger function to print Dolby.io Real-time Streaming logs according to the severity. By default, the SDK prints the standard output, where the severity is first and then the message."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cplusplus",children:"millicast::Logger::set_logger([](/millicast/const std::string& msg, millicast::LogLevel lvl) {\n  // Print your message here\n  std::cout << msg << std::endl;\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"3-publish-a-stream",children:"3. Publish a stream"}),"\n",(0,n.jsx)(t.p,{children:"Create a publisher object and set a listener object to the publisher to receive proper events. This requires creating a class that inherits the publisher's listener interface. Then, create a stream in your Dolby.io developer dashboard or using the Dolby.io Streaming REST API and set your credentials."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cplusplus",children:'// Create a publisher object\nstd::unique_ptr<millicast::Publisher> publisher = millicast::Publisher::create();\n\n// Set a listener object to the publisher\nclass PubListener : public millicast::Publisher::Listener\n{\n public:\n  PubListener() = default;\n  virtual ~PubListener() = default;\n\n  void on_connection_error(int code, const std::string& message) override {}\n  void on_connected() override { publisher->publish(); }\n  void on_stats_report(const millicast::StatsReport &) override {}\n\n  void on_signaling_error(const std::string& reason) override {}\n\n  void on_publishing() override {}\n  void on_publishing_error(const std::string& reason) override {}\n\n  void on_active() override {}\n  void on_inactive() override {}\n\n  void on_viewer_count(int count) override {}\n};\n\n// Create an instance of your listener and set it to the publisher\nauto listener = std::make_unique<PublisherListener>();\npublisher->set_listener(listener.get());\n\n// Get the credentials structure from your publisher instance, fill it in, and set the modified credentials\nauto credentials = publisher->get_credentials(); // Get the current credentials\ncredentials.stream_name = "streamName"; // The name of the stream you want to publish\ncredentials.token = "aefea56153765316754fe"; // The publishing token\ncredentials.api_url = "https://director.millicast.com/api/director/publish"; // The publish API URL\npublisher->set_credentials(std::move(credentials)); // Set the new credentials\n'})}),"\n",(0,n.jsx)(t.h2,{id:"4-configure-your-publishing-session",children:"4. Configure your publishing session"}),"\n",(0,n.jsx)(t.p,{children:"Get a list of the available codecs and set the codecs that you want to use. By default, the SDK uses VP8 as the video codec and Opus as the audio codec."}),"\n",(0,n.jsx)(t.p,{children:"Additionally, to publish several sources from the same application, create a publisher instance for each source. We recommend enabling discontinuous transmission that detects audio input and sends audio only when it is detected."}),"\n",(0,n.jsx)(t.p,{children:"The SDK also offers Simulcast that allows sending three different resolutions at once. It is disabled by default and only available for VP8 and H264. Optionally, when using the VP9 or AV1 video codec, you can choose to use SVC instead of Simulcast. The SVC mode sends several spatial and temporal layers encoded within the same stream. To enable SVC, set the layer ID you want to use in the options; only the following modes are available: L2T1, L2T2, L2T3, L3T1, L3T2, and L3T3."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cplusplus",children:'millicast::Publisher::Option options;\n\n// Get a list of supported codecs\nauto audio_codecs = millicast::Client::get_supported_audio_codecs();\nauto video_codecs = millicast::Client::get_supported_video_codecs();\n\n// Choose the preferred codecs\noptions.codecs.video = video_codecs.front(); // Setting the first video codec of the list\noptions.codecs.audio = audio_codecs.front(); // Setting the first audio codec of the list\n\n// Optionally, enable Simulcast\noptions.simulcast = true;\n\n// Optionally, enable SVC\noptions.svc_mode = millicast::ScalabilityMode::L3T3; // Set the L3T3 SVC mode\n\n//Optionally, set a source ID of the publisher and enable discontinuous transmission to enable multi-source\noptions.multisource.source_id = "YourId";\noptions.dtx = true;\n\n// Enable stereo\noptions.stereo = true;\n\n// Set the selected options to the publisher\npublisher->set_options(options);\n'})}),"\n",(0,n.jsx)(t.h2,{id:"5-add-the-audio-and-video-track",children:"5. Add the audio and video track"}),"\n",(0,n.jsx)(t.p,{children:"Add the audio and video track that you created earlier when you started capturing media."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cplusplus",children:"publisher->add_track(video_track);\npublisher->add_track(audio_track);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"6-authenticate-using-the-director-api",children:"6. Authenticate using the Director API"}),"\n",(0,n.jsx)(t.p,{children:"Authenticate to access Dolby.io Real-time Streaming through the Director API."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cplusplus",children:"publisher->connect();\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Successful authentication results in opening a WebSocket connection that allows using the Dolby.io Real-time Streaming server and calling the listener's ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_client_listener.html#a50511fbcaf9ac3dd4fc54c4e94e74982",children:"on_connected"})," method."]}),"\n",(0,n.jsx)(t.h2,{id:"7-start-publishing",children:"7. Start publishing"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cplusplus",children:"publisher->publish();\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Once the publisher starts sending media, the SDK calls the listener's ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_publisher_listener.html#ae3509ed7fac92914761036b014be7f43",children:"on_publishing"})," method."]}),"\n",(0,n.jsx)(t.h2,{id:"collecting-rtc-statistics",children:"Collecting RTC statistics"}),"\n",(0,n.jsxs)(t.p,{children:["You can periodically collect the WebRTC peer connection statistics if you enable them through the ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/protocol_m_c_client-p.html#ade56fc01941986fd5da5d02b7aba1a18",children:"enable_stats"})," method of the viewer or publisher. After enabling the statistics, you will get a report every second through the ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/protocol_m_c_delegate-p.html#a5dc7c879a257706e788f606d04e0ebd0",children:"on_stats_report"})," callback in the listener object. The identifiers and way to browse the stats are following the ",(0,n.jsx)(t.a,{href:"https://www.w3.org/TR/webrtc-stats/",children:"RTC specification"}),".",(0,n.jsx)(t.br,{}),"\n","The report contains the ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/classmillicast_1_1_stats_report.html",children:"StatsReport"})," object, which is a collection of several ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/namespacemillicast.html#aa1e2b03e1cd334be99d54a6318653ef3",children:"Stats"})," objects. They all have a specific type, whether it is inbound, outbound, codec, or media. Inbound is the statistics of incoming transport for the viewer and outbound is a type of outgoing statistics for the publisher."]})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return r},a:function(){return o}});var s=i(67294);let n={},a=s.createContext(n);function o(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);