import {divide, multiply, sum, subtract} from '../../lib.js'

/*
    Translate the following expression into prefix form:

    5 + 4 + (2 − (3 − (6 + 5 / 4 )))
    --------------------------------
         3 * (6 − 2) * (2 − 7)
*/

export const result = divide(
    sum(5, 4, subtract(2, subtract(3, sum(6, divide(4, 5))))),
    multiply(3, subtract(6, 2), subtract(2, 7))
)


test('exercise 1.2', () => {
    expect(result).toBe(-0.24666666666666667)
})
