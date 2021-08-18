import {avg, divide, lt, subtract, square, when, abs} from '../../lib.js'

/**
 The importance of this decomposition strategy is not simply that
 one is dividing the program into parts. After all, we could take any large
 program and divide it into parts—the ﬁrst ten lines, the next ten lines,
 the next ten lines, and so on. Rather, it is crucial that each procedure ac-
 complishes an identiﬁable task that can be used as a module in deﬁning
 other procedures.
 */

const goodEnough = (guess, x) => lt(abs(subtract(square(guess), x)), 0.001)

const improveGuess = (guess, x) => avg(guess, divide(x, guess))

const sqrt = (x, guess = 1.0) =>
    when(goodEnough(guess, x),
        () => guess,
        () => sqrt(x, improveGuess(guess, x)))


test('sqrt', () => {
    expect(sqrt(9)).toBe(3.00009155413138)
    expect(sqrt(100)).toBe(10.000000000139897)
    expect(sqrt(500)).toBe(22.3606797800062)
    expect(sqrt(900)).toBe(30.00000230911258)
    expect(sqrt(1000)).toBe(31.622782450701045)
})
