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

export const sqrt = (x, guess = 1.0) =>
    when(goodEnough(guess, x),
        () => guess,
        () => sqrt(x, improveGuess(guess, x)))
