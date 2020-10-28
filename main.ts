input.onButtonPressed(Button.A, function () {
    music.stopMelody(MelodyStopOptions.All)
    basic.clearScreen()
    basic.showString("Bom dia! Estao" + input.temperature() + "ºC")
})
basic.forever(function () {
    if (input.lightLevel() >= 10) {
        music.setVolume(50)
        music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
        led.setBrightness(255)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.pause(30000)
    } else {
        basic.pause(10000)
        led.setBrightness(10)
        basic.showString("Dormindo...")
    }
})
