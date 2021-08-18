//import {avg, divide, lt, subtract, square, when, abs, sum, multiply} from '../../lib.js'

/**
 * Newton’s method for cube roots is based on
 the fact that if y is an approximation to the cube root of x,
 then a better approximation is given by the value

 ( x / y*y + 2y ) / 3

 Use this formula to implement a cube-root procedure
 analogous to the square-root procedure.
 */

/*const goodEnough = (guess, x) => lt(
    abs(divide(
        sum(
            divide(
                guess,
                square(x)
            ),
            multiply(2, x)
        ),
        3
    )),
    0.1)

const improveGuess = (guess, x) => avg(guess, divide(x, guess))

export const sqrt = (x, guess = 1.0) =>
    when(goodEnough(guess, x),
        () => guess,
        () => sqrt(x, improveGuess(guess, x)))


test('sqrt', () => {
    expect(sqrt(9)).toBe(3.00009155413138)
    expect(sqrt(100)).toBe(10.000000000139897)
    expect(sqrt(500)).toBe(22.3606797800062)
    expect(sqrt(900)).toBe(30.00000230911258)
    expect(sqrt(1000)).toBe(31.622782450701045)
})*/

test('exercise 1.5',  () => undefined)
