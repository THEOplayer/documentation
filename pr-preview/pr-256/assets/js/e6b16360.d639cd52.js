"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["73363"],{18010:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>a,assets:()=>o,toc:()=>l,contentTitle:()=>c});var a=JSON.parse('{"id":"client-sdks/desktop/desktop-getting-started-with-subscribing","title":"Getting Started with Subscribing","description":"Follow these steps to add the subscribing capability to your application.","source":"@site/millicast/client-sdks/desktop/desktop-getting-started-with-subscribing.md","sourceDirName":"client-sdks/desktop","slug":"/desktop-getting-started-with-subscribing","permalink":"/documentation/pr-preview/pr-256/millicast/desktop-getting-started-with-subscribing","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/client-sdks/desktop/desktop-getting-started-with-subscribing.md","tags":[],"version":"current","frontMatter":{"title":"Getting Started with Subscribing","slug":"/desktop-getting-started-with-subscribing"},"sidebar":"millicast","previous":{"title":"Getting Started with Publishing","permalink":"/documentation/pr-preview/pr-256/millicast/desktop-getting-started-with-publishing"},"next":{"title":"Third-Party Dependencies","permalink":"/documentation/pr-preview/pr-256/millicast/desktop-third-party-dependencies"}}'),s=i("85893"),n=i("50065");let r={title:"Getting Started with Subscribing",slug:"/desktop-getting-started-with-subscribing"},c=void 0,o={},l=[{value:"1. Create a subscriber object",id:"1-create-a-subscriber-object",level:2},{value:"2. Create a listener class",id:"2-create-a-listener-class",level:2},{value:"3. Create an instance and set it to the viewer",id:"3-create-an-instance-and-set-it-to-the-viewer",level:2},{value:"4. Set up credentials",id:"4-set-up-credentials",level:2},{value:"5. Configure the viewer by setting your preferred options",id:"5-configure-the-viewer-by-setting-your-preferred-options",level:2},{value:"6. Create a WebSocket connection",id:"6-create-a-websocket-connection",level:2},{value:"7. Subscribe to the streamed content",id:"7-subscribe-to-the-streamed-content",level:2},{value:"8. Project media",id:"8-project-media",level:2},{value:"9. Select a layer that you want to receive",id:"9-select-a-layer-that-you-want-to-receive",level:2},{value:"10. Manage broadcast events",id:"10-manage-broadcast-events",level:2},{value:"11. Render video",id:"11-render-video",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Follow these steps to add the subscribing capability to your application."}),"\n",(0,s.jsx)(t.h2,{id:"1-create-a-subscriber-object",children:"1. Create a subscriber object"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cplusplus",children:"std::unique_ptr<millicast::Viewer> viewer = millicast::Viewer::create();\n"})}),"\n",(0,s.jsx)(t.h2,{id:"2-create-a-listener-class",children:"2. Create a listener class"}),"\n",(0,s.jsx)(t.p,{children:"Create a viewer's listener class by inheriting the viewer listener's interface."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cplusplus",children:"class ViewerListener : public millicast::Viewer::Listener\n{\n public:\n  // Your own code\n\n  ViewerListener() = default;\n  virtual ~ViewerListener() = default;\n\n  // Overrides from millicast::Viewer::Listener\n  void on_connected()  override { viewer->subscribe(); }\n  void on_connection_error(int code, const std::string& message) override {}\n  void on_stats_report(const millicast::StatsReport &) override {};\n\n  void on_signaling_error(const std::string& reason) override {};\n\n  void on_subscribed() override {};\n  void on_subscribed_error(const std::string& error) override {};\n\n  void on_track(std::weak_ptr<millicast::AudioTrack> track,\n                const std::optional<std::string>& mid) override {};\n  void on_track(std::weak_ptr<millicast::VideoTrack> track,\n                const std::optional<std::string>& mid) override {};\n\n  void on_vad(const std::string& mid, const std::optional<std::string>& source_id) override {};\n  void on_stopped() override {};\n  void on_active(const std::string& stream_id,\n                 const std::vector<millicast::TrackInfo>& tracks,\n                 const std::optional<std::string>& source_id) override {};\n  void on_inactive(const std::string& stream_id, const std::optional<std::string>& source_id) override {};\n  void on_layers(const std::string& mid,\n		 const std::vector<millicast::Viewer::LayerData>& active_layers,\n		 const std::vector<millicast::Viewer::LayerData>& inactive_layers) override {};\n\n  void on_viewer_count(int count) override {};\n};\n"})}),"\n",(0,s.jsx)(t.h2,{id:"3-create-an-instance-and-set-it-to-the-viewer",children:"3. Create an instance and set it to the viewer"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cplusplus",children:"auto listener = std::make_unique<ViewerListener>();\nviewer->set_listener(listener.get());\n"})}),"\n",(0,s.jsx)(t.h2,{id:"4-set-up-credentials",children:"4. Set up credentials"}),"\n",(0,s.jsxs)(t.p,{children:["Get your ",(0,s.jsx)(t.strong,{children:"stream name"})," and ",(0,s.jsx)(t.strong,{children:"stream ID"})," from the dashboard and set them up in the SDK."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cplusplus",children:'auto credentials = viewer->get_credentials(); // Get the current credentials\ncredentials.stream_name = "streamName"; // The name of the stream you want to subscribe to\ncredentials.account_id = "ACCOUNT"; // The ID of your Dolby.io Real-time Streaming account\ncredentials.token = "aefea56153765316754fe"; // Optionally set the subscribing token\ncredentials.api_url = "https://director.millicast.com/api/director/subscribe"; // The subscribe API URL\npublisher->set_credentials(std::move(credentials)); // Set the new credentials\n'})}),"\n",(0,s.jsx)(t.h2,{id:"5-configure-the-viewer-by-setting-your-preferred-options",children:"5. Configure the viewer by setting your preferred options"}),"\n",(0,s.jsx)(t.p,{children:"Configure your stream to receive multi-source content."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cplusplus",children:'millicast::Viewer::Option options;\n\noptions.multisource.pinned_source_id = "main"; // The main source that will be received by the default media stream\noptions.multisource.mutiplexed_audio_track = 3; // Enables  audio multiplexing and denotes the number of audio tracks to receive as Voice Activity Detection (VAD) multiplexed audio\noptions.multisource.excluded_source_id = { "toexclude" }; // Audio streams that should not be included in the multiplex, for example your own audio stream\n\n// Set the selected options\nviewer->set_options(options);\n'})}),"\n",(0,s.jsx)(t.h2,{id:"6-create-a-websocket-connection",children:"6. Create a WebSocket connection"}),"\n",(0,s.jsx)(t.p,{children:"Authenticate and create a WebSocket connection to connect with the Dolby.io Real-time Streaming server."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cplusplus",children:"viewer->connect();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If the connection fails, the listener's ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_client_listener.html#a363bc633ec37886cc00654526080e11c",children:"on_connection_error"})," method is called with the HTTP error code and failure message. If the code is 0, double-check your internet connection or the API URL set in the credentials. If the connection is successful, the SDK calls the ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_client_listener.html#a50511fbcaf9ac3dd4fc54c4e94e74982",children:"on_connected"})," method."]}),"\n",(0,s.jsx)(t.h2,{id:"7-subscribe-to-the-streamed-content",children:"7. Subscribe to the streamed content"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cplusplus",children:"viewer->subscribe();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When the operation is successful, the SDK calls ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#aba1f2c831e69d430a26693945d20ac61",children:"on_subscribed"})," and sends you an event in the listener with the created audio and video tracks. Otherwise, the SDK calls ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#af1e8df1bdae14acea62b39eb9f420be1",children:"on_subscribed_error"})," with an error message."]}),"\n",(0,s.jsx)(t.h2,{id:"8-project-media",children:"8. Project media"}),"\n",(0,s.jsxs)(t.p,{children:["If publishers use the multi-source feature, you need to project tracks into a specified transceiver using its media ID (mid). By default, if you do not project anything, you receive no media. When you start subscribing, you receive the ",(0,s.jsx)(t.code,{children:"active"})," event with the track IDs and the source ID. In order to project a track into a transceiver, you must use the ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/classmillicast_1_1promises_1_1_viewer.html#a6ba7dff8f19485e268aa623fe6162969",children:"project"})," method of the viewer. You need to specify the source ID you are targeting and an array of the tracks you want to project."]}),"\n",(0,s.jsxs)(t.p,{children:["By default, only one video and audio track is negotiated in the SDP. If there are several publishers sending media in one stream, you can dynamically add more tracks using the ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/classmillicast_1_1promises_1_1_viewer.html#ad8f350406f874776c0b10a6edd9775aa",children:"add_remote_track"})," method each time you receive an active event. The method adds a new transceiver and renegotiates locally SDP. When successful, the SDK creates a new track and calls the ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#a663a46b27c6626d85089d4150bbd5416",children:"on_track"})," callback, so you can get the track and its corresponding mid."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cplusplus",children:'// Get mid either from the `on_track` callback of the listener object or by calling the `get_mid` method with the track ID\n/* option 1 */\n\n struct Listener : public Client::Listener\n  {\n	/* ... */\n    void on_track(std::weak_ptr<VideoTrack> track,\n			  const std::optional<std::string>& mid) {\n     	// Keep the mid value somewhere\n    }\n }\n\n/* option 2 */\n// Let\'s say you have video track named track\n\nauto mid = viewer->get_mid(track->id());\n\n// Project a video track\nmillicast::Viewer::ProjectionData data;\ndata.mid = mid; // The media ID of the transceiver you want to project into\ndata.media = "video"; // The media track type, either video or audio\ndata.track_id = track_id; // The name of the track on the media server side, which is the track ID you get in the active event\n\nviewer->project(source_id, { data });\n\nviewer.add_remote_track("video"); // "Audio" or "video" depending on the type of track you want to add\n'})}),"\n",(0,s.jsxs)(t.p,{children:["To stop projecting the track, call the ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/interface_m_c_subscriber.html#acbb979241b31a3274cfbbae412130416",children:"unproject"})," method, which requires an array of the media IDs that you want to stop projecting."]}),"\n",(0,s.jsx)(t.h2,{id:"9-select-a-layer-that-you-want-to-receive",children:"9. Select a layer that you want to receive"}),"\n",(0,s.jsxs)(t.p,{children:["When a publisher uses Simulcast or the SVC mode when sending a video feed, the media server automatically chooses the right layer to send to the viewer according to the bandwidth estimation. However, you can force the server to send you a specific layer by calling the ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/interface_m_c_subscriber.html#a10827a5b60afc01671779c3b847dcfbc",children:"select"})," method."]}),"\n",(0,s.jsx)(t.p,{children:"For example, if the sender uses Simulcast, it is possible to receive three different encoding IDs: 'h' for the high resolution, 'm' for the medium one, and 'l' for the low. In order to choose the medium resolution, you have to do the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cplusplus",children:'millicast::Viewer::LayerData data;\ndata.encoding_id = "m"; // The encoding ID, which is the ID of the Simulcast or SVC layer\ndata.temporal_layer_id = 1; // The ID of the temporary layer\ndata.spatial_layer_id = 0; // The ID of the spatial layer\n\nviewer->select(data);\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You can retrieve all the available layers with their corresponding IDs by calling the ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/interface_m_c_projection_data.html#a078c3db7875f446538238f4e317e2a9b",children:"layer"})," event."]}),"\n",(0,s.jsx)(t.h2,{id:"10-manage-broadcast-events",children:"10. Manage broadcast events"}),"\n",(0,s.jsx)(t.p,{children:"When broadcast events occur, the SDK calls the corresponding callback in the listener object. The following Viewer event listeners are available:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#acc60201710f50bcc6bb5dce2d3971bd1",children:"on_active"}),": Called when a new source starts publishing a stream. It contains the stream ID, the track information, and the source ID."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#ad3c5a31f746678a36a1f97f6d86e33ce",children:"on_inactive"}),": Called when a source is no longer published within a stream. It contains the stream ID and the source ID."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#a01bec721aec75124df5f12f25a3a66fa",children:"on_stopped"}),": Called when a stream stops."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#ad3ea212b97cf9b57072e9da150df5cc6",children:"on_vad"}),": Called when a source ID is multiplexed into an audio track based on the voice activity level. It contains media ID (mid) of the track and the source ID."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#ada345cbb1f379fc37b1a5bbbf13e33e4",children:"on_layers"}),": Called when Simulcast or Scalable Video Coding (SVC) layers become available. It contains arrays of the ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/classmillicast_1_1compat_1_1_viewer.html#a98ea440337a0e93d62e95979ce632716",children:"LayerData"})," object that you can use in the ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/interface_m_c_subscriber.html#a10827a5b60afc01671779c3b847dcfbc",children:"select"})," command."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_client_listener.html#af76589a88e386d598115a96b16b884d7",children:"on_viewer_count"}),": Called each time a new viewer enters or leaves a stream. All clients connected to the stream are notified about the current number of viewers."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"11-render-video",children:"11. Render video"}),"\n",(0,s.jsx)(t.p,{children:"The SDK provides an interface that lets you implement a class responsible for receiving video frames."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cplusplus",children:"// Write a class that inherits _VideoRenderer_\nclass MyRenderer : public millicast::VideoRenderer\n{\n	public:\n\n  void on_frame(const millicast::VideoFrame& frame) override;\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["After this step, you will get the ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/classmillicast_1_1_video_frame.html",children:"VideoFrame"})," whenever it is available. You can render the frame using any graphic library."]}),"\n",(0,s.jsxs)(t.p,{children:["To get video data from the ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/classmillicast_1_1_video_frame.html",children:"VideoFrame"}),", use the ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/classmillicast_1_1_video_frame.html#a0aeb850fd7e741e809047ae8afd5980a",children:"get_buffer"})," method. Allocate a buffer with the correct size beforehand. You can get the size of the buffer according to its ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/namespacemillicast.html#a3e878ddbbd034e20ba1b96575ac0fd2a",children:"VideoType"})," using the ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/classmillicast_1_1_video_frame.html#a016442afcd01fa8b67cfc24212454130",children:"size"})," method. Both ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/classmillicast_1_1_video_frame.html#a0aeb850fd7e741e809047ae8afd5980a",children:"get_buffer"})," and ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/classmillicast_1_1_video_frame.html#a016442afcd01fa8b67cfc24212454130",children:"size"})," have a template parameter that lets you choose in which ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/cpp/namespacemillicast.html#a3e878ddbbd034e20ba1b96575ac0fd2a",children:"VideoType"})," you want your video data, either ",(0,s.jsx)(t.code,{children:"millicast::VideoType::ARGB"})," or ",(0,s.jsx)(t.code,{children:"millicast::VideoType::I420"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Then, create an instance of your renderer and add it to a local or remote video track, select one playback device to be able to play audio, adjust the volume of remote tracks, and clean the memory."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cplusplus",children:"// Create an instance of your renderer and add it to a local or remote video track\nMyRenderer * renderer = new MyRenderer();\ntrack->add_renderer(renderer);\n\n// Select one playback device\nauto playback_list = millicast::Media::get_playback_devices(); // Get the playback devices\nauto playback = playback_list[0]; // Get the first device\nplayback->init_playback(); // Set this playback as the one to play audio\n\n// Adjust the volume of remote tracks\naudio_track->set_volume(1.0); // Volume can be between 0 and 1\n\n// To clean the memory at the end of your program\nmillicast::Client::cleanup();\n"})})]})}function h(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return c},a:function(){return r}});var a=i(67294);let s={},n=a.createContext(s);function r(e){let t=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);