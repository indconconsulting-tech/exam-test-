input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 139), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
})
if (true) {
    
} else {
    
}
basic.clearScreen()
basic.showString("Hello!")
basic.showIcon(IconNames.Heart)
