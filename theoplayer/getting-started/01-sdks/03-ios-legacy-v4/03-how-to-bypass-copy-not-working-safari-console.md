# How to bypass copy() not working in Safari console

When trying to use the copy() method in the Safari console, you'll notice that this does not work.

This functionality is often used to copy the source of a player and to paste it somewhere else. You could work around this limitation by following the steps below.

1. In the Safari console containing a THEOplayer, enter JSON.stringify(player.source)
2. The console will convert the object into a string and return it.
3. Copy the string to the clipboard manually
4. Say we want to set the source of a second player to the source we just copied. Now, in (another) console, enter `player.source = JSON.parse(stringyoujustcopied)`
5. The second player will now have the same source as the first player
