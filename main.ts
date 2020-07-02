input.onButtonPressed(Button.A, function () {
    dcmotor.m1(true, 0)
    dcmotor.m2(true, 0)
    basic.showNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    dcmotor.m1(true, 50)
    dcmotor.m2(true, 50)
    basic.showNumber(1)
})
input.onButtonPressed(Button.B, function () {
    dcmotor.m1(false, 35)
    dcmotor.m2(true, 35)
    basic.showNumber(2)
})
basic.showIcon(IconNames.Happy)
dcmotor.usedc()
