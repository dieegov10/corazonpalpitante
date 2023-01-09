for (let index = 0; index < 4; index++) {
	
}
basic.showLeds(`
    . # # # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
