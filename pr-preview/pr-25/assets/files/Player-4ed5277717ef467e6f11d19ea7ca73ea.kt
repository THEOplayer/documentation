package com.theoplayer.android.ui

import android.view.View
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.State
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.runtime.staticCompositionLocalOf
import com.theoplayer.android.api.THEOplayerView
import com.theoplayer.android.api.cast.Cast
import com.theoplayer.android.api.cast.chromecast.PlayerCastState
import com.theoplayer.android.api.error.THEOplayerException
import com.theoplayer.android.api.event.EventListener
import com.theoplayer.android.api.event.chromecast.CastErrorEvent
import com.theoplayer.android.api.event.chromecast.CastStateChangeEvent
import com.theoplayer.android.api.event.chromecast.ChromecastEventTypes
import com.theoplayer.android.api.event.player.DurationChangeEvent
import com.theoplayer.android.api.event.player.EndedEvent
import com.theoplayer.android.api.event.player.ErrorEvent
import com.theoplayer.android.api.event.player.PauseEvent
import com.theoplayer.android.api.event.player.PlayEvent
import com.theoplayer.android.api.event.player.PlayerEventTypes
import com.theoplayer.android.api.event.player.RateChangeEvent
import com.theoplayer.android.api.event.player.ReadyStateChangeEvent
import com.theoplayer.android.api.event.player.ResizeEvent
import com.theoplayer.android.api.event.player.SeekedEvent
import com.theoplayer.android.api.event.player.SeekingEvent
import com.theoplayer.android.api.event.player.SourceChangeEvent
import com.theoplayer.android.api.event.player.TimeUpdateEvent
import com.theoplayer.android.api.event.player.VolumeChangeEvent
import com.theoplayer.android.api.event.track.mediatrack.audio.list.AudioTrackListEventTypes
import com.theoplayer.android.api.event.track.mediatrack.video.VideoTrackEventTypes
import com.theoplayer.android.api.event.track.mediatrack.video.list.VideoTrackListEventTypes
import com.theoplayer.android.api.event.track.texttrack.list.TextTrackListEventTypes
import com.theoplayer.android.api.player.ReadyState
import com.theoplayer.android.api.player.track.mediatrack.MediaTrack
import com.theoplayer.android.api.player.track.mediatrack.quality.AudioQuality
import com.theoplayer.android.api.player.track.mediatrack.quality.VideoQuality
import com.theoplayer.android.api.player.track.texttrack.TextTrack
import com.theoplayer.android.api.player.track.texttrack.TextTrackKind
import com.theoplayer.android.api.player.track.texttrack.TextTrackMode
import com.theoplayer.android.api.source.SourceDescription
import com.theoplayer.android.api.event.track.mediatrack.audio.list.AddTrackEvent as AudioAddTrackEvent
import com.theoplayer.android.api.event.track.mediatrack.audio.list.RemoveTrackEvent as AudioRemoveTrackEvent
import com.theoplayer.android.api.event.track.mediatrack.audio.list.TrackListChangeEvent as AudioTrackListChangeEvent
import com.theoplayer.android.api.event.track.mediatrack.video.ActiveQualityChangedEvent as VideoActiveQualityChangedEvent
import com.theoplayer.android.api.event.track.mediatrack.video.TargetQualityChangedEvent as VideoTargetQualityChangedEvent
import com.theoplayer.android.api.event.track.mediatrack.video.list.AddTrackEvent as VideoAddTrackEvent
import com.theoplayer.android.api.event.track.mediatrack.video.list.RemoveTrackEvent as VideoRemoveTrackEvent
import com.theoplayer.android.api.event.track.mediatrack.video.list.TrackListChangeEvent as VideoTrackListChangeEvent
import com.theoplayer.android.api.event.track.texttrack.list.AddTrackEvent as TextAddTrackEvent
import com.theoplayer.android.api.event.track.texttrack.list.RemoveTrackEvent as TextRemoveTrackEvent
import com.theoplayer.android.api.event.track.texttrack.list.TrackListChangeEvent as TextTrackListChangeEvent
import com.theoplayer.android.api.player.Player as THEOplayer

internal val LocalPlayer = staticCompositionLocalOf<Player?> { null }

/**
 * A player holding a [THEOplayer] instance that can be hosted by a [DefaultUI] or [UIController].
 *
 * All properties are backed by [State] or [MutableState] objects, so reads from within a
 * [Composable] function will automatically subscribe to changes of that property.
 */
interface Player {
    /**
     * Returns the backing THEOplayer instance.
     *
     * Note that [THEOplayer] properties are *not* backed by [State] objects, so composables
     * will *not* be automatically subscribed to changes. Instead, use [THEOplayer.addEventListener],
     * or use a corresponding [Player] property if available.
     */
    val player: THEOplayer?

    /**
     * Returns the wrapped THEOplayer view.
     *
     * *DO NOT* use this view directly! It will be managed by a [UIController] or [DefaultUI].
     */
    val theoplayerView: THEOplayerView?

    /**
     * Returns or sets the player's source.
     */
    var source: SourceDescription?

    /**
     * Returns the raw [Cast] API of the backing THEOplayer instance.
     */
    val cast: Cast?

    /**
     * Returns the current playback position of the media, in seconds.
     */
    val currentTime: Double

    /**
     * Returns the duration of the media, in seconds.
     */
    val duration: Double

    /**
     * Returns the ranges of the media to which the player can seek.
     */
    val seekable: TimeRanges

    /**
     * Returns whether the player is paused.
     */
    val paused: Boolean

    /**
     * Returns whether playback has reached the end of the media.
     */
    val ended: Boolean

    /**
     * Returns whether the player is seeking.
     */
    val seeking: Boolean

    /**
     * Returns the [ReadyState] of the player.
     */
    val readyState: ReadyState

    /**
     * Returns or sets the audio volume of the player.
     *
     * The player's volume is separate from the device's media volume.
     * In general, it is recommended to let the user control the volume of the device instead,
     * and leave the player's volume untouched.
     */
    var volume: Double

    /**
     * Returns or sets whether the audio is muted.
     */
    var muted: Boolean

    /**
     * Returns or sets the playback rate of the player.
     */
    var playbackRate: Double

    /**
     * Returns the width of the active video rendition, in pixels.
     */
    val videoWidth: Int

    /**
     * Returns the height of the active video rendition, in pixels.
     */
    val videoHeight: Int

    /**
     * Returns whether the player has already started playback before.
     *
     * This can be used to show certain controls only after the user has first started playback.
     */
    val firstPlay: Boolean

    /**
     * Returns any fatal error the player has encountered, if any.
     */
    val error: THEOplayerException?

    /**
     * Returns or sets whether the player should be shown in fullscreen mode.
     */
    var fullscreen: Boolean

    /**
     * Returns whether the player is currently waiting for more data to resume playback.
     */
    val loading: Boolean

    /**
     * Returns the [StreamType] of the media.
     *
     * This can be used to show or hide certain controls which are only relevant
     * for certain stream types.
     */
    val streamType: StreamType

    /**
     * Returns the currently active video quality.
     */
    val activeVideoQuality: VideoQuality?

    /**
     * Returns or sets the target video quality.
     *
     * If `null`, then the player will choose a video quality based on its ABR algorithm.
     * Otherwise, the player will only load from the given video quality.
     */
    var targetVideoQuality: VideoQuality?

    /**
     * Returns all available video qualities.
     */
    val videoQualities: List<VideoQuality>

    /**
     * Returns all available audio tracks.
     */
    val audioTracks: List<MediaTrack<AudioQuality>>

    /**
     * Returns or sets the active audio track.
     */
    var activeAudioTrack: MediaTrack<AudioQuality>?

    /**
     * Returns all available subtitle tracks.
     *
     * A subtitle track is a [TextTrack] whose [kind][TextTrack.getKind]
     * is [TextTrackKind.SUBTITLES] or [TextTrackKind.CAPTIONS].
     */
    val subtitleTracks: List<TextTrack>

    /**
     * Returns or sets the active subtitle track.
     */
    var activeSubtitleTrack: TextTrack?

    /**
     * Returns the casting state of the player.
     */
    val castState: PlayerCastState

    /**
     * Returns the name of the connected Chromecast receiver, if any.
     */
    val castReceiverName: String?

    /**
     * Starts or resumes playback.
     */
    fun play()

    /**
     * Pauses playback.
     */
    fun pause()

    /**
     * Contains properties to access the current [Player].
     */
    companion object {
        /**
         * Retrieves the current [Player] at the call site's position in the hierarchy.
         */
        val current: Player?
            @Composable
            get() = LocalPlayer.current
    }
}

/**
 * The type of a stream.
 */
enum class StreamType {
    /**
     * Video-on-demand: the stream has a known fixed duration.
     */
    Vod,

    /**
     * Live: the stream has an unknown duration, and does not allow seeking to an earlier time.
     */
    Live,

    /**
     * DVR: the stream has an unknown duration, and allows seeking to an earlier time.
     */
    Dvr
}

internal class PlayerImpl(override val theoplayerView: THEOplayerView?) : Player {
    override val player = theoplayerView?.player
    override val cast = theoplayerView?.cast
    override var currentTime by mutableStateOf(0.0)
        private set
    override var duration by mutableStateOf(Double.NaN)
        private set
    override var seekable by mutableStateOf(TimeRanges(listOf()))
        private set
    override var paused by mutableStateOf(true)
        private set
    override var ended by mutableStateOf(false)
        private set
    override var seeking by mutableStateOf(false)
        private set
    override var readyState by mutableStateOf(ReadyState.HAVE_NOTHING)
        private set
    override var videoWidth by mutableStateOf(0)
        private set
    override var videoHeight by mutableStateOf(0)
        private set
    override var firstPlay by mutableStateOf(false)
        private set
    override var error by mutableStateOf<THEOplayerException?>(null)
        private set

    private fun updateCurrentTime() {
        currentTime = player?.currentTime ?: 0.0
        seekable = player?.seekable?.let { TimeRanges.fromTHEOplayer(it) } ?: TimeRanges(listOf())
    }

    private fun updateDuration() {
        duration = player?.duration ?: Double.NaN
    }

    private fun updateCurrentTimeAndPlaybackState() {
        updateCurrentTime()
        paused = player?.isPaused ?: true
        ended = player?.isEnded ?: false
        seeking = player?.isSeeking ?: false
        readyState = player?.readyState ?: ReadyState.HAVE_NOTHING
        if (!paused) {
            firstPlay = true
        }
    }

    private fun updateVideoWidthAndHeight() {
        videoWidth = player?.videoWidth ?: 0
        videoHeight = player?.videoHeight ?: 0
    }

    private val playListener = EventListener<PlayEvent> { updateCurrentTimeAndPlaybackState() }
    private val pauseListener = EventListener<PauseEvent> { updateCurrentTimeAndPlaybackState() }
    private val endedListener = EventListener<EndedEvent> { updateCurrentTimeAndPlaybackState() }
    private val timeUpdateListener = EventListener<TimeUpdateEvent> { updateCurrentTime() }
    private val durationChangeListener = EventListener<DurationChangeEvent> { updateDuration() }
    private val seekingListener =
        EventListener<SeekingEvent> { updateCurrentTimeAndPlaybackState() }
    private val seekedListener = EventListener<SeekedEvent> { updateCurrentTimeAndPlaybackState() }
    private val readyStateChangeListener =
        EventListener<ReadyStateChangeEvent> { updateCurrentTimeAndPlaybackState() }
    private val resizeListener = EventListener<ResizeEvent> { updateVideoWidthAndHeight() }
    private val sourceChangeListener = EventListener<SourceChangeEvent> {
        _source = player?.source
        error = null
        firstPlay = false
        updateCurrentTimeAndPlaybackState()
        updateDuration()
        updateVideoWidthAndHeight()
        updateActiveVideoTrack()
    }
    private val errorListener = EventListener<ErrorEvent> { event ->
        _source = player?.source
        error = event.errorObject
        updateCurrentTimeAndPlaybackState()
        updateDuration()
        updateVideoWidthAndHeight()
        updateActiveVideoTrack()
    }

    override fun play() {
        paused = false
        player?.play()
    }

    override fun pause() {
        paused = true
        player?.pause()
    }

    private var _source by mutableStateOf(player?.source)
    override var source: SourceDescription?
        get() = _source
        set(value) {
            _source = value
            player?.source = value
        }

    private var _volume by mutableStateOf(1.0)
    private var _muted by mutableStateOf(false)
    override var volume: Double
        get() = _volume
        set(value) {
            _volume = value
            player?.volume = value
        }
    override var muted: Boolean
        get() = _muted
        set(value) {
            _muted = value
            player?.isMuted = value
        }

    private fun updateVolumeAndMuted() {
        _volume = player?.volume ?: 1.0
        _muted = player?.isMuted ?: false
    }

    private val volumeChangeListener = EventListener<VolumeChangeEvent> { updateVolumeAndMuted() }

    private var _playbackRate by mutableStateOf(1.0)
    override var playbackRate: Double
        get() = _playbackRate
        set(value) {
            _playbackRate = value
            player?.playbackRate = value
        }

    private fun updatePlaybackRate() {
        _playbackRate = player?.playbackRate ?: 1.0
    }

    private val rateChangeListener = EventListener<RateChangeEvent> { updatePlaybackRate() }

    private val fullscreenHandler: FullscreenHandler? =
        theoplayerView?.findViewById<View>(com.theoplayer.android.R.id.theo_player_container)
            ?.let { FullscreenHandlerImpl(it) }
    private var _fullscreen by mutableStateOf(false)
    override var fullscreen: Boolean
        get() = _fullscreen
        set(value) {
            _fullscreen = value
            if (value) {
                fullscreenHandler?.requestFullscreen()
            } else {
                fullscreenHandler?.exitFullscreen()
            }
        }

    private fun updateFullscreen() {
        _fullscreen = fullscreenHandler?.fullscreen ?: false
    }

    val fullscreenListener =
        FullscreenHandler.OnFullscreenChangeListener { updateFullscreen() }

    override val loading by derivedStateOf {
        !paused && !ended && (seeking || readyState.ordinal < ReadyState.HAVE_FUTURE_DATA.ordinal)
    }

    override val streamType by derivedStateOf {
        if (duration.isInfinite()) {
            val slidingWindow = seekable.bounds?.let { it.endInclusive - it.start } ?: 0.0
            // TODO Make DVR threshold configurable?
            if (slidingWindow >= 60) {
                StreamType.Dvr
            } else {
                StreamType.Live
            }
        } else {
            StreamType.Vod
        }
    }

    private var activeVideoTrack: MediaTrack<VideoQuality>? = null
    override val videoQualities = mutableStateListOf<VideoQuality>()
    override var activeVideoQuality by mutableStateOf<VideoQuality?>(null)
        private set
    private var _targetVideoQuality by mutableStateOf<VideoQuality?>(null)
    override var targetVideoQuality: VideoQuality?
        get() = _targetVideoQuality
        set(value) {
            _targetVideoQuality = value
            activeVideoTrack?.targetQuality = value
        }

    private fun updateActiveVideoTrack() {
        setActiveVideoTrack(player?.videoTracks?.find { it.isEnabled })
    }

    private fun setActiveVideoTrack(videoTrack: MediaTrack<VideoQuality>?) {
        val oldActiveVideoTrack = activeVideoTrack
        if (oldActiveVideoTrack == videoTrack) {
            return
        }
        oldActiveVideoTrack?.removeEventListener(
            VideoTrackEventTypes.ACTIVEQUALITYCHANGEDEVENT,
            videoActiveQualityChangeListener
        )
        oldActiveVideoTrack?.removeEventListener(
            VideoTrackEventTypes.TARGETQUALITYCHANGEDEVENT,
            videoTargetQualityChangeListener
        )
        activeVideoTrack = videoTrack
        videoQualities.clear()
        videoTrack?.qualities?.let { videoQualities.addAll(it) }
        updateActiveVideoQuality()
        updateTargetVideoQuality()
        videoTrack?.addEventListener(
            VideoTrackEventTypes.ACTIVEQUALITYCHANGEDEVENT,
            videoActiveQualityChangeListener
        )
        videoTrack?.addEventListener(
            VideoTrackEventTypes.TARGETQUALITYCHANGEDEVENT,
            videoTargetQualityChangeListener
        )
    }

    private fun updateActiveVideoQuality() {
        activeVideoQuality = activeVideoTrack?.activeQuality
    }

    private fun updateTargetVideoQuality() {
        _targetVideoQuality = activeVideoTrack?.targetQuality
    }

    private val videoAddTrackListener =
        EventListener<VideoAddTrackEvent> { updateActiveVideoTrack() }
    private val videoRemoveTrackListener =
        EventListener<VideoRemoveTrackEvent> { updateActiveVideoTrack() }
    private val videoTrackListChangeListener =
        EventListener<VideoTrackListChangeEvent> { updateActiveVideoTrack() }
    private val videoActiveQualityChangeListener =
        EventListener<VideoActiveQualityChangedEvent> { updateActiveVideoQuality() }
    private val videoTargetQualityChangeListener =
        EventListener<VideoTargetQualityChangedEvent> { updateTargetVideoQuality() }

    override var audioTracks = mutableStateListOf<MediaTrack<AudioQuality>>()
        private set
    private var _activeAudioTrack by mutableStateOf<MediaTrack<AudioQuality>?>(null)
    override var activeAudioTrack: MediaTrack<AudioQuality>?
        get() = _activeAudioTrack
        set(value) {
            _activeAudioTrack = value
            if (value != null) {
                value.isEnabled = true
            } else {
                player?.audioTracks?.forEach { it.isEnabled = false }
            }
        }

    private fun updateAudioTracks() {
        val newAudioTracks = player?.audioTracks?.toList() ?: listOf()
        if (audioTracks == newAudioTracks) {
            return
        }
        audioTracks.clear()
        audioTracks.addAll(newAudioTracks)
        updateActiveAudioTrack()
    }

    private fun updateActiveAudioTrack() {
        _activeAudioTrack = audioTracks.find { it.isEnabled }
    }

    private val audioAddTrackListener = EventListener<AudioAddTrackEvent> { updateAudioTracks() }
    private val audioRemoveTrackListener =
        EventListener<AudioRemoveTrackEvent> { updateAudioTracks() }
    private val audioTrackListChangeListener =
        EventListener<AudioTrackListChangeEvent> { updateActiveAudioTrack() }

    override var subtitleTracks = mutableStateListOf<TextTrack>()
        private set
    private var _activeSubtitleTrack by mutableStateOf<TextTrack?>(null)
    override var activeSubtitleTrack: TextTrack?
        get() = _activeSubtitleTrack
        set(value) {
            _activeSubtitleTrack = value
            player?.textTracks?.forEach {
                if (isSubtitleTrack(it)) {
                    it.mode = if (it == value) TextTrackMode.SHOWING else TextTrackMode.DISABLED
                }
            }
        }

    private fun updateSubtitleTracks() {
        val newSubtitleTracks = player?.textTracks?.filter { isSubtitleTrack(it) } ?: listOf()
        if (subtitleTracks == newSubtitleTracks) {
            return
        }
        subtitleTracks.clear()
        subtitleTracks.addAll(newSubtitleTracks)
        updateActiveSubtitleTrack()
    }

    private fun updateActiveSubtitleTrack() {
        _activeSubtitleTrack = subtitleTracks.find { it.mode == TextTrackMode.SHOWING }
    }

    private val textAddTrackListener = EventListener<TextAddTrackEvent> { updateSubtitleTracks() }
    private val textRemoveTrackListener =
        EventListener<TextRemoveTrackEvent> { updateSubtitleTracks() }
    private val textTrackListChangeListener =
        EventListener<TextTrackListChangeEvent> { updateActiveSubtitleTrack() }

    override var castState: PlayerCastState by mutableStateOf(PlayerCastState.UNAVAILABLE)
    override var castReceiverName: String? by mutableStateOf(null)

    private fun updateCastState() {
        castState = cast?.chromecast?.state ?: PlayerCastState.UNAVAILABLE
        castReceiverName = cast?.chromecast?.receiverName
    }

    private val chromecastStateChangeListener =
        EventListener<CastStateChangeEvent> { updateCastState() }
    private val chromecastErrorListener = EventListener<CastErrorEvent> { updateCastState() }

    init {
        updateCurrentTimeAndPlaybackState()
        updateDuration()
        updateVolumeAndMuted()
        updatePlaybackRate()
        updateFullscreen()
        updateVideoWidthAndHeight()
        updateActiveVideoTrack()
        updateAudioTracks()
        updateSubtitleTracks()
        updateCastState()
        player?.addEventListener(PlayerEventTypes.PLAY, playListener)
        player?.addEventListener(PlayerEventTypes.PAUSE, pauseListener)
        player?.addEventListener(PlayerEventTypes.ENDED, endedListener)
        player?.addEventListener(PlayerEventTypes.TIMEUPDATE, timeUpdateListener)
        player?.addEventListener(PlayerEventTypes.DURATIONCHANGE, durationChangeListener)
        player?.addEventListener(PlayerEventTypes.SEEKING, seekingListener)
        player?.addEventListener(PlayerEventTypes.SEEKED, seekedListener)
        player?.addEventListener(PlayerEventTypes.READYSTATECHANGE, readyStateChangeListener)
        player?.addEventListener(PlayerEventTypes.VOLUMECHANGE, volumeChangeListener)
        player?.addEventListener(PlayerEventTypes.RATECHANGE, rateChangeListener)
        player?.addEventListener(PlayerEventTypes.RESIZE, resizeListener)
        player?.addEventListener(PlayerEventTypes.SOURCECHANGE, sourceChangeListener)
        player?.addEventListener(PlayerEventTypes.ERROR, errorListener)
        player?.videoTracks?.addEventListener(
            VideoTrackListEventTypes.ADDTRACK,
            videoAddTrackListener
        )
        player?.videoTracks?.addEventListener(
            VideoTrackListEventTypes.REMOVETRACK,
            videoRemoveTrackListener
        )
        player?.videoTracks?.addEventListener(
            VideoTrackListEventTypes.TRACKLISTCHANGE,
            videoTrackListChangeListener
        )
        player?.audioTracks?.addEventListener(
            AudioTrackListEventTypes.ADDTRACK,
            audioAddTrackListener
        )
        player?.audioTracks?.addEventListener(
            AudioTrackListEventTypes.REMOVETRACK,
            audioRemoveTrackListener
        )
        player?.audioTracks?.addEventListener(
            AudioTrackListEventTypes.TRACKLISTCHANGE,
            audioTrackListChangeListener
        )
        player?.textTracks?.addEventListener(
            TextTrackListEventTypes.ADDTRACK,
            textAddTrackListener
        )
        player?.textTracks?.addEventListener(
            TextTrackListEventTypes.REMOVETRACK,
            textRemoveTrackListener
        )
        player?.textTracks?.addEventListener(
            TextTrackListEventTypes.TRACKLISTCHANGE,
            textTrackListChangeListener
        )
        cast?.chromecast?.addEventListener(
            ChromecastEventTypes.STATECHANGE,
            chromecastStateChangeListener
        )
        cast?.chromecast?.addEventListener(ChromecastEventTypes.ERROR, chromecastErrorListener)
        fullscreenHandler?.onFullscreenChangeListener = fullscreenListener
    }

    fun dispose() {
        setActiveVideoTrack(null)
        audioTracks.clear()
        subtitleTracks.clear()
        _activeAudioTrack = null
        _activeSubtitleTrack = null
        player?.removeEventListener(PlayerEventTypes.PLAY, playListener)
        player?.removeEventListener(PlayerEventTypes.PAUSE, pauseListener)
        player?.removeEventListener(PlayerEventTypes.ENDED, endedListener)
        player?.removeEventListener(PlayerEventTypes.TIMEUPDATE, timeUpdateListener)
        player?.removeEventListener(PlayerEventTypes.DURATIONCHANGE, durationChangeListener)
        player?.removeEventListener(PlayerEventTypes.SEEKING, seekingListener)
        player?.removeEventListener(PlayerEventTypes.SEEKED, seekedListener)
        player?.removeEventListener(PlayerEventTypes.READYSTATECHANGE, readyStateChangeListener)
        player?.removeEventListener(PlayerEventTypes.VOLUMECHANGE, volumeChangeListener)
        player?.removeEventListener(PlayerEventTypes.RATECHANGE, rateChangeListener)
        player?.removeEventListener(PlayerEventTypes.RESIZE, resizeListener)
        player?.removeEventListener(PlayerEventTypes.SOURCECHANGE, sourceChangeListener)
        player?.removeEventListener(PlayerEventTypes.ERROR, errorListener)
        player?.videoTracks?.removeEventListener(
            VideoTrackListEventTypes.ADDTRACK,
            videoAddTrackListener
        )
        player?.videoTracks?.removeEventListener(
            VideoTrackListEventTypes.REMOVETRACK,
            videoRemoveTrackListener
        )
        player?.videoTracks?.removeEventListener(
            VideoTrackListEventTypes.TRACKLISTCHANGE,
            videoTrackListChangeListener
        )
        player?.audioTracks?.removeEventListener(
            AudioTrackListEventTypes.ADDTRACK,
            audioAddTrackListener
        )
        player?.audioTracks?.removeEventListener(
            AudioTrackListEventTypes.REMOVETRACK,
            audioRemoveTrackListener
        )
        player?.audioTracks?.removeEventListener(
            AudioTrackListEventTypes.TRACKLISTCHANGE,
            audioTrackListChangeListener
        )
        player?.textTracks?.removeEventListener(
            TextTrackListEventTypes.ADDTRACK,
            textAddTrackListener
        )
        player?.textTracks?.removeEventListener(
            TextTrackListEventTypes.REMOVETRACK,
            textRemoveTrackListener
        )
        player?.textTracks?.removeEventListener(
            TextTrackListEventTypes.TRACKLISTCHANGE,
            textTrackListChangeListener
        )
        cast?.chromecast?.removeEventListener(
            ChromecastEventTypes.STATECHANGE,
            chromecastStateChangeListener
        )
        cast?.chromecast?.removeEventListener(ChromecastEventTypes.ERROR, chromecastErrorListener)
        fullscreenHandler?.onFullscreenChangeListener = null
    }
}

private fun isSubtitleTrack(track: TextTrack): Boolean {
    return when (track.kind) {
        TextTrackKind.SUBTITLES.type -> true
        TextTrackKind.CAPTIONS.type -> true
        else -> false
    }
}