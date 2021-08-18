import {when, gt, sum, square} from '../../lib.js'

/*
    Define a procedure that takes three numbers
    as arguments and returns the sum of the squares of the two
    larger numbers.
*/

const findBigger = (x, y) => when(gt(x, y), () => x, () => y)

const result = (x, y, z) => sum(
    square(findBigger(x, y)),
    square(findBigger(y, z))
)


test('exercise 1.3', () => {
    expect(result(2, 3, 4)).toBe(25)
    expect(result(4, 3, 2)).toBe(25)
    expect(result(4, 0, 6)).toBe(52)
})
