/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by:Mercy
 * Created on: Oct 2025
 * This program Moves a motor
*/

// variable
const servoNumberOne = robotbit.Servos.S1

// start
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// move 0 degress
input.onButtonPressed(Button.A, function() {
    robotbit.Servo(servoNumberOne,0)
    basic.showNumber(0)
    basic.clearScreen()
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

// move 180 degress
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumberOne, 180)
    basic.showNumber(180)
    basic.clearScreen()
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
