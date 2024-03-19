package com.theoplayer.android.ui

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.theoplayer.android.api.THEOplayerConfig
import com.theoplayer.android.api.THEOplayerView
import com.theoplayer.android.api.source.SourceDescription
import com.theoplayer.android.ui.theme.THEOplayerTheme

/**
 * A default THEOplayer UI component.
 *
 * This component provides a great player experience out-of-the-box, that works for all types
 * of streams. It provides all the common playback controls for playing, seeking, changing
 * languages and qualities.
 *
 * The colors and fonts can be changed by wrapping this inside a [THEOplayerTheme].
 * For more extensive customizations, we recommend defining your own custom UI using
 * a [UIController].
 *
 * @param modifier the [Modifier] to be applied to this UI
 * @param config the player configuration to be used when constructing the [THEOplayerView]
 * @param source the source description to load into the player
 * @param title the stream's title, shown at the top of the player
 * @see UIController
 */
@Composable
fun DefaultUI(
    modifier: Modifier = Modifier,
    config: THEOplayerConfig,
    source: SourceDescription? = null,
    title: String? = null
) {
    val player = rememberPlayer(config)
    LaunchedEffect(player, source) {
        player.source = source
    }

    DefaultUI(modifier = modifier, player = player, title = title)
}

/**
 * A default THEOplayer UI component.
 *
 * This component provides a great player experience out-of-the-box, that works for all types
 * of streams. It provides all the common playback controls for playing, seeking, changing
 * languages and qualities.
 *
 * The colors and fonts can be changed by wrapping this inside a [THEOplayerTheme].
 * For more extensive customizations, we recommend defining your own custom UI using
 * a [UIController].
 *
 * @param modifier the [Modifier] to be applied to this UI
 * @param player the player. This should always be created using [rememberPlayer].
 * @param title the stream's title, shown at the top of the player
 * @see UIController
 */
@Composable
fun DefaultUI(
    modifier: Modifier = Modifier,
    player: Player = rememberPlayer(),
    title: String? = null
) {
    UIController(
        modifier = modifier,
        player = player,
        centerOverlay = {
            if (player.firstPlay) {
                LoadingSpinner()
            }
        },
        topChrome = {
            if (player.firstPlay) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    title?.let {
                        Text(
                            modifier = Modifier.padding(8.dp),
                            text = it
                        )
                    }
                    Spacer(modifier = Modifier.weight(1f))
                    LanguageMenuButton()
                    ChromecastButton()
                }
            }
        },
        centerChrome = {
            if (player.firstPlay) {
                SeekButton(seekOffset = -10, iconSize = 48.dp, contentPadding = PaddingValues(8.dp))
            }
            PlayButton(iconModifier = Modifier.size(96.dp), contentPadding = PaddingValues(8.dp))
            if (player.firstPlay) {
                SeekButton(seekOffset = 10, iconSize = 48.dp, contentPadding = PaddingValues(8.dp))
            }
        },
        bottomChrome = {
            if (player.firstPlay) {
                ChromecastDisplay(modifier = Modifier.padding(8.dp))
                if (player.streamType != StreamType.Live) {
                    SeekBar()
                }
                Row(verticalAlignment = Alignment.CenterVertically) {
                    MuteButton()
                    LiveButton()
                    CurrentTimeDisplay(showDuration = true)
                    Spacer(modifier = Modifier.weight(1f))
                    FullscreenButton()
                }
            }
        },
        errorOverlay = {
            Box(contentAlignment = Alignment.Center) {
                ErrorDisplay()
                // Ensure the user can still exit fullscreen
                if (player.fullscreen) {
                    FullscreenButton(modifier = Modifier.align(Alignment.BottomEnd))
                }
            }
        }
    )
}
