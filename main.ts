input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    music.stopMelody(MelodyStopOptions.All)
    led.setBrightness(255)
    basic.showString("Bom dia! Estao" + input.temperature() + "ºC")
})
basic.forever(function () {
    if (input.lightLevel() >= 15) {
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
        basic.pause(20000)
    } else {
        led.setBrightness(10)
        basic.showString("Dormindo...")
    }
})
