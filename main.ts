input.onButtonPressed(Button.A, function () {
    if (adjust == 1) {
        if (hours < 23) {
            hours += 1
        } else {
            hours = 0
        }
        basic.showString("" + (hours))
    } else {
        basic.showString(time)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString(time)
})
input.onButtonPressed(Button.AB, function () {
    if (adjust == 0) {
        adjust = 1
    } else {
        adjust = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (adjust == 1) {
        if (minutes < 59) {
            minutes += 1
        } else {
            minutes = 0
        }
        basic.showString("" + (minutes))
    }
})
let hours = 0
let minutes = 0
let adjust = 0
let time = ""
time = ""
adjust = 0
minutes = 0
hours = 0
basic.forever(function () {
    if (hours <= 9 && minutes <= 9) {
        time = "0" + hours + ":0" + minutes
    } else if (hours <= 9) {
        time = "0" + hours + ":" + minutes
    } else if (minutes <= 9) {
        time = "" + hours + ":0" + minutes
    } else {
        time = "" + hours + ":" + minutes
    }
    basic.pause(60000)
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
        if (hours < 23) {
            hours += 1
        } else {
            hours = 0
        }
    }
})
