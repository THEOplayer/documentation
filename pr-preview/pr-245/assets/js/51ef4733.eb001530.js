"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["43169"],{31627:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>h,contentTitle:()=>d});var i=JSON.parse('{"id":"getting-started/sdks/android/getting-started","title":"Getting started on Android","description":"Add THEOplayer and Kotlin libraries to your application","source":"@site/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/02-android/00-getting-started.mdx","sourceDirName":"getting-started/01-sdks/02-android","slug":"/getting-started/sdks/android/getting-started","permalink":"/documentation/pr-preview/pr-245/theoplayer/v6/getting-started/sdks/android/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/02-android/00-getting-started.mdx","tags":[],"version":"v6","sidebarPosition":0,"frontMatter":{"sidebar_position":0},"sidebar":"android","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-245/theoplayer/v6/android/"},"next":{"title":"Getting started on Android","permalink":"/documentation/pr-preview/pr-245/theoplayer/v6/getting-started/sdks/android/getting-started"}}'),a=t("85893"),r=t("50065"),l=t("71509"),o=t("97645");let s={sidebar_position:0},d="Getting started on Android",c={},h=[{value:"Add THEOplayer and Kotlin libraries to your application",id:"add-theoplayer-and-kotlin-libraries-to-your-application",level:2},{value:"Setting up the license",id:"setting-up-the-license",level:2},{value:"Add THEOplayer view to your application",id:"add-theoplayer-view-to-your-application",level:2},{value:"Adding THEOplayerView via XML layout",id:"adding-theoplayerview-via-xml-layout",level:3},{value:"Adding THEOplayerView programmatically (Constructor API)",id:"adding-theoplayerview-programmatically-constructor-api",level:3},{value:"Use THEOplayer API in your application",id:"use-theoplayer-api-in-your-application",level:2},{value:"1. Get the THEOplayer instance",id:"1-get-the-theoplayer-instance",level:3},{value:"2. Configure source",id:"2-configure-source",level:3},{value:"3. Control THEOplayer through the API",id:"3-control-theoplayer-through-the-api",level:3},{value:"4. Listen for THEOplayer events",id:"4-listen-for-theoplayer-events",level:3},{value:"5. Play fullscreen video in landscape mode",id:"5-play-fullscreen-video-in-landscape-mode",level:3},{value:"Couple THEOplayer with the lifecycle callbacks",id:"couple-theoplayer-with-the-lifecycle-callbacks",level:2},{value:"Run your application",id:"run-your-application",level:2},{value:"Start screen",id:"start-screen",level:3},{value:"Playing screen",id:"playing-screen",level:3},{value:"Paused screen",id:"paused-screen",level:3},{value:"Rotated fullscreen",id:"rotated-fullscreen",level:3},{value:"Summary",id:"summary",level:2}];function u(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"getting-started-on-android",children:"Getting started on Android"})}),"\n",(0,a.jsx)(n.h2,{id:"add-theoplayer-and-kotlin-libraries-to-your-application",children:"Add THEOplayer and Kotlin libraries to your application"}),"\n",(0,a.jsxs)(n.p,{children:["We have to modify the ",(0,a.jsx)(n.code,{children:"build.gradle"})," files to be able to fetch the Android SDK and the Kotlin plugin."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In your ",(0,a.jsx)(n.strong,{children:"top-level"})," (project) ",(0,a.jsx)(n.code,{children:"settings.gradle.kts"})," file"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Add the THEOplayer Maven repository."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(l.Z,{queryString:"lang",children:[(0,a.jsx)(o.default,{value:"groovy",label:"Groovy",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-groovy",children:'dependencyResolutionManagement {\n    repositories {\n        google()\n        mavenCentral()\n        maven { url "https://maven.theoplayer.com/releases" }\n    }\n}\n'})})}),(0,a.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'dependencyResolutionManagement {\n    repositories {\n        google()\n        mavenCentral()\n        maven { url = uri("https://maven.theoplayer.com/releases") }\n    }\n}\n'})})})]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Next, we need to edit the ",(0,a.jsx)(n.code,{children:"build.gradle"})," on the ",(0,a.jsx)(n.strong,{children:"module-level"})," (",(0,a.jsx)(n.strong,{children:"app/build.gradle"}),")"]}),"\n"]}),"\n",(0,a.jsxs)(l.Z,{queryString:"lang",children:[(0,a.jsx)(o.default,{value:"groovy",label:"Groovy",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-groovy",children:'implementation "com.theoplayer.theoplayer-sdk-android:core:+"\nimplementation "org.jetbrains.kotlin:kotlin-stdlib:1.6.21"\nimplementation "androidx.appcompat:appcompat:1.7.0"\n'})})}),(0,a.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'implementation("com.theoplayer.theoplayer-sdk-android:core:+")\nimplementation("org.jetbrains.kotlin:kotlin-stdlib:1.6.21")\nimplementation("androidx.appcompat:appcompat:1.7.0")\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)("u",{children:"Note"}),": It's possible to replace the ",(0,a.jsx)(n.code,{children:"+"})," with a particular version of THEOplayer that should be used, for example:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"implementation 'com.theoplayer.theoplayer-sdk-android:core:6.0.0'"})}),"\n",(0,a.jsx)(n.h2,{id:"setting-up-the-license",children:"Setting up the license"}),"\n",(0,a.jsx)(n.p,{children:"You need to configure your THEOplayer license, if you don't enter this license string, you might encounter licensing issues (e.g.: when trying to play non-whitelisted video streams)."}),"\n",(0,a.jsxs)(n.p,{children:["First, obtain a THEOplayer Android SDK license through the ",(0,a.jsx)(n.a,{href:"https://portal.theoplayer.com/login",children:"THEOplayer Developer Portal"}),".\n",(0,a.jsx)(n.img,{src:"https://cdn.theoplayer.com/images/git/theoplayer-android-sdk-license-string.png",alt:""})]}),"\n",(0,a.jsxs)(n.p,{children:["Then, identify your license string from the screenshot above and add the ",(0,a.jsx)(n.code,{children:"<meta-data ..."})," tag below at the appropriate location in your ",(0,a.jsx)(n.code,{children:"AndroidManifest.xml"}),", and swap ",(0,a.jsx)(n.code,{children:"your_license_here"})," with your\nactual license string."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<application>\n    <meta-data\n        android:name="THEOPLAYER_LICENSE"\n        android:value="your_license_here" />\n</application>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Additionally, to play online videos with THEOplayer, you first need to add ",(0,a.jsx)(n.a,{href:"https://developer.android.com/reference/android/Manifest.permission.html#INTERNET",children:"INTERNET"})," permission into the ",(0,a.jsx)(n.code,{children:"AndroidManifest.xml"})," file too."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<uses-permission android:name="android.permission.INTERNET" />\n'})}),"\n",(0,a.jsxs)(n.p,{children:["More information regarding the license can be found ",(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/license/introduction",children:"here"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"add-theoplayer-view-to-your-application",children:"Add THEOplayer view to your application"}),"\n",(0,a.jsx)(n.p,{children:"THEOplayer can be added to an Android application either:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Through a layout (XML)"}),": By adding the ",(0,a.jsx)(n.code,{children:"THEOplayerView"})," to your layout XML file (e.g., ",(0,a.jsx)(n.code,{children:"activity_main.xml"}),"), or"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Programmatically using the Constructor API"}),": This approach also allows you to configure the license string through a programmatic configuration instead of the ",(0,a.jsx)(n.code,{children:"AndroidManifest.xml"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"adding-theoplayerview-via-xml-layout",children:"Adding THEOplayerView via XML layout"}),"\n",(0,a.jsxs)(n.p,{children:["You can add the ",(0,a.jsx)(n.code,{children:"THEOplayerView"})," to the layout of the ",(0,a.jsx)(n.code,{children:"MainActivity"})," with the snippet below."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(92732).Z+"",width:"864",height:"854"})}),"\n",(0,a.jsxs)(n.p,{children:["At least the ",(0,a.jsx)(n.code,{children:"id"}),", ",(0,a.jsx)(n.code,{children:"width"})," and ",(0,a.jsx)(n.code,{children:"height"})," attributes need to be specified on the new view. The ",(0,a.jsx)(n.code,{children:"id"})," is important as it is used to identify the view object in your ",(0,a.jsx)(n.code,{children:"MainActivity"})," class."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<com.theoplayer.android.api.THEOplayerView\n    android:id="@+id/theoplayer"\n    android:layout_width="match_parent"\n    android:layout_height="300dp"\n    app:layout_constraintTop_toTopOf="parent">\n</com.theoplayer.android.api.THEOplayerView>\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(67220).Z+"",width:"1868",height:"560"})}),"\n",(0,a.jsx)(n.h3,{id:"adding-theoplayerview-programmatically-constructor-api",children:"Adding THEOplayerView programmatically (Constructor API)"}),"\n",(0,a.jsxs)(n.p,{children:["In the Activity/Fragment, you can use the ",(0,a.jsx)(n.a,{href:"https://docs.theoplayer.com/api-reference/android/index.html?com/theoplayer/android/api/THEOplayerView.html",children:"constructor API"})," to create a THEOplayer instance\nby passing along a context and a ",(0,a.jsx)(n.a,{href:"https://docs.theoplayer.com/api-reference/android/index.html?com/theoplayer/android/api/THEOplayerConfig.html",children:(0,a.jsx)(n.code,{children:"THEOplayerConfig"})}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["In this ",(0,a.jsx)(n.code,{children:"THEOplayerConfig"}),", you can configure your license string, as demonstrated in the snippet below."]}),"\n",(0,a.jsxs)(l.Z,{queryString:"lang",children:[(0,a.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val playerConfig = THEOplayerConfig.Builder()\n    .license("your_license_here")\n    .build()\n\nval theoPlayerView = THEOplayerView(this, playerConfig)\n'})})}),(0,a.jsx)(o.default,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()\n    .license("your_license_here")\n    .build();\n\nTHEOplayerView theoPlayerView = new THEOplayerView(this, playerConfig);\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"This approach is ideal when you need to adjust the configuration dynamically, such as during runtime or based on specific app conditions. It removes the need for XML-based configuration and is useful for advanced customization scenarios."}),"\n",(0,a.jsx)(n.h2,{id:"use-theoplayer-api-in-your-application",children:"Use THEOplayer API in your application"}),"\n",(0,a.jsxs)(n.p,{children:["Now in the ",(0,a.jsx)(n.code,{children:"MainActivity"})," we can retrieve the ",(0,a.jsx)(n.code,{children:"THEOplayerView"})," by the ",(0,a.jsx)(n.code,{children:"id"})," we set earlier using the ",(0,a.jsx)(n.code,{children:"findViewById"})," method."]}),"\n",(0,a.jsx)(n.h3,{id:"1-get-the-theoplayer-instance",children:"1. Get the THEOplayer instance"}),"\n",(0,a.jsxs)(l.Z,{queryString:"lang",children:[(0,a.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"...\nimport com.theoplayer.android.api.THEOplayerView\n\nclass MainActivity : ComponentActivity() {\n    lateinit var theoPlayerView: THEOplayerView\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n        theoPlayerView = findViewById(R.id.theoplayer)\n    }\n}\n"})})}),(0,a.jsx)(o.default,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"\nimport com.theoplayer.android.api.THEOplayerView;\n\npublic class MainActivity extends ComponentActivity {\n    private THEOplayerView theoPlayerView;\n\n    @Override\n    protected void onCreate(@Nullable Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n        theoPlayerView = findViewById(R.id.theoplayer);\n    }\n}\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"2-configure-source",children:"2. Configure source"}),"\n",(0,a.jsxs)(n.p,{children:["To play a video in THEOplayer, we need to configure a source for the player in our ",(0,a.jsx)(n.code,{children:"MainActivity"}),":"]}),"\n",(0,a.jsxs)(l.Z,{queryString:"lang",children:[(0,a.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val typedSource = TypedSource\n    .Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n    .type(SourceType.DASH)\n    .build()\n\nval sourceDescription = SourceDescription\n    .Builder(typedSource)\n    .build()\n\ntheoPlayerView.player.source = sourceDescription\n'})})}),(0,a.jsx)(o.default,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'TypedSource typedSource = new TypedSource\n        .Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n        .type(SourceType.DASH)\n        .build();\n\nSourceDescription sourceDescription = new SourceDescription\n        .Builder(typedSource)\n        .build();\n\ntheoPlayerView.getPlayer().setSource(sourceDescription);\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"3-control-theoplayer-through-the-api",children:"3. Control THEOplayer through the API"}),"\n",(0,a.jsx)(n.p,{children:"We will now introduce a button to start/stop the video in the player."}),"\n",(0,a.jsxs)(n.p,{children:["First add the button to our ",(0,a.jsx)(n.code,{children:"activity_main.xml"})," layout file."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<Button\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:id="@+id/btn_playpause"\n        android:text="PLAY/PAUSE" />\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(64582).Z+"",width:"1812",height:"808"})}),"\n",(0,a.jsxs)(n.p,{children:["Then set an ",(0,a.jsx)(n.code,{children:"OnClickListener()"})," on the button in our ",(0,a.jsx)(n.code,{children:"MainActivity"})," code to trigger ",(0,a.jsx)(n.code,{children:"play()"})," and ",(0,a.jsx)(n.code,{children:"pause()"})," on the player."]}),"\n",(0,a.jsxs)(l.Z,{queryString:"lang",children:[(0,a.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val btnPlayPause = findViewById<Button>(R.id.btn_playpause)\nbtnPlayPause.setOnClickListener {\n    if (theoPlayerView.player.isPaused) {\n        theoPlayerView.player.play()\n    } else {\n        theoPlayerView.player.pause()\n    }\n}\n"})})}),(0,a.jsx)(o.default,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Button btnPlayPause = findViewById(R.id.btn_playpause);\nbtnPlayPause.setOnClickListener(new View.OnClickListener() {\n    @Override\n    public void onClick(View v) {\n        if (theoPlayerView.getPlayer().isPaused()) {\n            theoPlayerView.getPlayer().play();\n        } else {\n            theoPlayerView.getPlayer().pause();\n        }\n    }\n});\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(65).Z+"",width:"1806",height:"1292"})}),"\n",(0,a.jsx)(n.h3,{id:"4-listen-for-theoplayer-events",children:"4. Listen for THEOplayer events"}),"\n",(0,a.jsx)(n.p,{children:"The next step is listening for player events."}),"\n",(0,a.jsxs)(n.p,{children:["First, we need to create two more TextViews in the ",(0,a.jsx)(n.code,{children:"activity_main.xml"})," file."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<TextView\n    android:layout_width="wrap_content"\n    android:layout_height="wrap_content"\n    android:id="@+id/txt_playstatus"\n    android:layout_marginStart="20dp"/>\n\n<TextView\n    android:layout_width="wrap_content"\n    android:layout_height="wrap_content"\n    android:id="@+id/txt_timeupdate"\n    android:layout_marginStart="20dp"/>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["We will now listen for ",(0,a.jsx)(n.code,{children:"PLAY"}),", ",(0,a.jsx)(n.code,{children:"PAUSE"})," and ",(0,a.jsx)(n.code,{children:"TIMEUPDATE"})," in this example."]}),"\n",(0,a.jsxs)(l.Z,{queryString:"lang",children:[(0,a.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val txtPlayStatus = findViewById<TextView>(R.id.txt_playstatus)\nval txtTimeUpdate = findViewById<TextView>(R.id.txt_timeupdate)\n\ntheoPlayerView.player.addEventListener(PlayerEventTypes.PLAY) {\n    txtPlayStatus.text = "Playing"\n}\n\ntheoPlayerView.player.addEventListener(PlayerEventTypes.PAUSE) {\n    txtPlayStatus.text = "Paused"\n}\n\ntheoPlayerView.player.addEventListener(PlayerEventTypes.TIMEUPDATE) { timeUpdateEvent ->\n    txtTimeUpdate.text = timeUpdateEvent.currentTime.toString()\n}\n'})})}),(0,a.jsx)(o.default,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'TextView txtPlayStatus = findViewById(R.id.txt_playstatus);\nTextView txtTimeUpdate = findViewById(R.id.txt_timeupdate);\n\ntheoPlayerView.getPlayer().addEventListener(PlayerEventTypes.PLAY, new EventListener<PlayEvent>() {\n    @Override\n    public void handleEvent(PlayEvent playEvent) {\n        txtPlayStatus.setText("Playing");\n    }\n});\n\ntheoPlayerView.getPlayer().addEventListener(PlayerEventTypes.PAUSE, new EventListener<PauseEvent>() {\n    @Override\n    public void handleEvent(PauseEvent pauseEvent) {\n        txtPlayStatus.setText("Paused");\n    }\n});\n\ntheoPlayerView.getPlayer().addEventListener(PlayerEventTypes.TIMEUPDATE, new EventListener<TimeUpdateEvent>() {\n    @Override\n    public void handleEvent(TimeUpdateEvent timeUpdateEvent) {\n        txtTimeUpdate.setText(String.valueOf(timeUpdateEvent.getCurrentTime()));\n    }\n});\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["When the events are triggered, we will update the ",(0,a.jsx)(n.strong,{children:"MainActivity"})," UI with the corresponding state."]}),"\n",(0,a.jsx)(n.h3,{id:"5-play-fullscreen-video-in-landscape-mode",children:"5. Play fullscreen video in landscape mode"}),"\n",(0,a.jsx)(n.p,{children:"THEOplayer SDK contains a default fullscreen activity which can be started automatically when you rotate your device."}),"\n",(0,a.jsxs)(n.p,{children:["We have to configure our player instance in the ",(0,a.jsx)(n.code,{children:"MainActivity"})," to react to orientation changes and start the Fullscreen activity."]}),"\n",(0,a.jsxs)(l.Z,{queryString:"lang",children:[(0,a.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"override fun onCreate(savedInstanceState: Bundle?) {\n    //...\n    theoPlayerView = findViewById(R.id.theoplayer)\n    theoPlayerView.settings.isFullScreenOrientationCoupled = true\n    //...\n}\n"})})}),(0,a.jsx)(o.default,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    // ...\n    theoPlayerView = findViewById(R.id.theoplayer);\n    theoPlayerView.getSettings().setFullScreenOrientationCoupled(true);\n    // ...\n}\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(66379).Z+"",width:"1802",height:"854"})}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"AndroidManifest.xml"})," we can disable the default orientation behavior on our ",(0,a.jsx)(n.code,{children:"MainActivity"})," and lock it in portrait. Then, because we enabled fullscreen orientation coupling with the ",(0,a.jsx)(n.code,{children:"setFullScreenOrientationCoupled(true)"})," method earlier, THEOplayer will take care of the support of seamless landscape activity transition at rotation."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<activity android:name=".MainActivity"\n    android:screenOrientation="userPortrait"\n    android:configChanges="orientation|screenSize" >\n    <intent-filter>\n        <action android:name="android.intent.action.MAIN" />\n\n        <category android:name="android.intent.category.LAUNCHER" />\n    </intent-filter>\n</activity>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["If you would like to customize the Fullscreen Activity, you can take a look at our sample ",(0,a.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-android-sdk/tree/master/full-screen-handling",children:"here"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"couple-theoplayer-with-the-lifecycle-callbacks",children:"Couple THEOplayer with the lifecycle callbacks"}),"\n",(0,a.jsxs)(n.p,{children:["In order for THEOplayer to work properly and in sync with the ",(0,a.jsx)(n.a,{href:"https://developer.android.com/guide/components/activities/activity-lifecycle",children:"Activity lifecycle changes"})," (e.g. when we rotate the device or start a new Activity or the app goes to background).\nWe need to call the ",(0,a.jsx)(n.code,{children:"onResume"}),", ",(0,a.jsx)(n.code,{children:"onPause"})," and ",(0,a.jsx)(n.code,{children:"onDestroy"})," methods of the ",(0,a.jsx)(n.code,{children:"THEOplayerView"})," when the matching methods are called in the Activity."]}),"\n",(0,a.jsxs)(l.Z,{queryString:"lang",children:[(0,a.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"class MainActivity : ComponentActivity() {\n\n    // ...\n\n    override fun onPause() {\n        super.onPause()\n        theoPlayerView.onPause()\n    }\n\n    override fun onResume() {\n        super.onResume()\n        theoPlayerView.onResume()\n    }\n\n    override fun onDestroy() {\n        super.onDestroy()\n        theoPlayerView.onDestroy()\n    }\n\n    // ...\n\n}\n"})})}),(0,a.jsx)(o.default,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public class MainActivity extends AppCompatActivity{\n\n    // ...\n\n    @Override\n    protected void onPause() {\n        super.onPause();\n        theoPlayerView.onPause();\n    }\n\n    @Override\n    protected void onResume() {\n        super.onResume();\n        theoPlayerView.onResume();\n    }\n\n    @Override\n    protected void onDestroy() {\n        super.onDestroy();\n        theoPlayerView.onDestroy();\n    }\n\n    // ...\n}\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"run-your-application",children:"Run your application"}),"\n",(0,a.jsx)(n.p,{children:"Here you have some screenshots from the running application:"}),"\n",(0,a.jsx)(n.h3,{id:"start-screen",children:"Start screen"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(76036).Z+"",width:"572",height:"1118"})}),"\n",(0,a.jsx)(n.h3,{id:"playing-screen",children:"Playing screen"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(19710).Z+"",width:"572",height:"1118"})}),"\n",(0,a.jsx)(n.h3,{id:"paused-screen",children:"Paused screen"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(39567).Z+"",width:"572",height:"1118"})}),"\n",(0,a.jsx)(n.h3,{id:"rotated-fullscreen",children:"Rotated fullscreen"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(6454).Z+"",width:"1118",height:"572"})}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(n.p,{children:"This guide focuses on creating an Android application from scratch and integrating the THEOplayer Android SDK."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"You have learned how to interact with the player via the available APIs in Kotlin and Java,"}),"\n",(0,a.jsx)(n.li,{children:"you have registered player events,"}),"\n",(0,a.jsx)(n.li,{children:"and you have learned how to enable automatic orientation detection."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can find various samples for different use cases on ",(0,a.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-android-sdk/tree/master",children:"GitHub"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Did you encounter any issues? Raise a ticket through ",(0,a.jsx)(n.a,{href:"https://opentelly.atlassian.net/servicedesk/customer/portal/1",children:"the ticketing system"})," and we will be happy to assist."]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},92732:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/android-getting-started-13_2-2581c1dcb239371b38441eff6e36e67d.png"},67220:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/android-getting-started-14_2-d3679a00ce0fd4aa120793ddf8a96df3.png"},64582:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/android-getting-started-16_2-c9da3210e9ea5233dd37a28b23cf3436.png"},65:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/android-getting-started-17_2-7c2ab5a4cca6f765e67b9c91989dab65.png"},66379:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/android-getting-started-21_2-2d0fe0d572fda2b75cd485696997f3b8.png"},76036:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/android-getting-started-screenshot-1-38ce0ff7ab21b1cffa889c91d2543b9f.png"},19710:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/android-getting-started-screenshot-2-d107e77d808409e46aceb0af2254c254.png"},39567:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/android-getting-started-screenshot-3-a2952d823ef5f5c639d5fca97458b8f6.png"},6454:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/android-getting-started-screenshot-4-cadbdc87fd1b76e026ce32081367c1d6.png"},97645:function(e,n,t){t.r(n),t.d(n,{default:()=>r});var i=t("85893");t("67294");var a=t("67026");function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",r),hidden:t,children:n})}},71509:function(e,n,t){t.d(n,{Z:()=>u});var i=t("85893"),a=t("67294"),r=t("67026"),l=t("34718"),o=t("52371"),s=t("6735");function d(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e,d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),h=e=>{let n=e.currentTarget,t=s[d.indexOf(n)].value;t!==a&&(c(n),o(t))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{let t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map(e=>{let{value:n,label:t,attributes:l}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{d.push(e)},onKeyDown:u,onClick:h,...l,className:(0,r.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":a===n}),children:t??n},n)})})}function c(e){let{lazy:n,children:t,selectedValue:l}=e,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=o.find(e=>e.props.value===l);return e?(0,a.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function h(e){let n=(0,o.Y)(e);return(0,i.jsxs)("div",{className:(0,r.Z)("tabs-container","tabList__CuJ"),children:[(0,i.jsx)(d,{...n,...e}),(0,i.jsx)(c,{...n,...e})]})}function u(e){let n=(0,s.default)();return(0,i.jsx)(h,{...e,children:(0,o.h)(e.children)},String(n))}},52371:function(e,n,t){t.d(n,{Y:function(){return h},h:function(){return d}});var i=t(67294),a=t(16550),r=t(8714),l=t(89207),o=t(69413),s=t(54510);function d(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function c(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}function h(e){let{defaultValue:n,queryString:t=!1,groupId:h}=e,u=function(e){let{values:n,children:t}=e;return(0,i.useMemo)(()=>{let e=n??d(t).map(e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}});return!function(e){let n=(0,o.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[p,y]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=t.find(e=>e.default)??t[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:u})),[g,v]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,i.useCallback)(e=>{if(!o)return;let n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})},[o,r])]}({queryString:t,groupId:h}),[x,m]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[a,r]=(0,s.Nk)(t);return[a,(0,i.useCallback)(e=>{t&&r.set(e)},[t,r])]}({groupId:h}),f=(()=>{let e=g??x;return c({value:e,tabValues:u})?e:null})();return(0,r.Z)(()=>{f&&y(f)},[f]),{selectedValue:p,selectValue:(0,i.useCallback)(e=>{if(!c({value:e,tabValues:u}))throw Error(`Can't select invalid tab value=${e}`);y(e),v(e),m(e)},[v,m,u]),tabValues:u}}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var i=t(67294);let a={},r=i.createContext(a);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);