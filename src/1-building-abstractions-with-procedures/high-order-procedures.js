import {when, gt, sum, cube, divide, multiply} from '../../lib'

const sumIntegers1 = (a, b) => when(
    gt(a, b),
    () => 0,
    () => sum(
        a,
        sumIntegers1(sum(a, 1), b)
    )
)

const sumCubes1 = (a, b) => when(
    gt(a, b),
    () => 0,
    () => sum(
        cube(a),
        sumCubes1(sum(a, 1), b)
    )
)

const sumPi1 = (a, b) => when(
    gt(a, b),
    () => 0,
    () => sum(
        sum(
            divide(
                1.0,
                multiply(a, sum(a, 2))
            ),
            sumPi1(sum(a, 4), b)
        )
    )
)

const sumHop = (term, a, next, b) => when(
    gt(a, b),
    () => 0,
    () => sum(
        term(a),
        sumHop(term, next(a), next, b)
    )
)

const sumIntegers2 = (a, b) => sumHop((a) => a, a, (a) => sum(a, 1), b)
const sumCubes2 = (a, b) => sumHop((a) => cube(a), a, (a) => sum(a, 1), b)
const sumPi2 = (a, b) => sumHop((a) => divide(1, multiply(a, sum(a, 2))), a, (a) => sum(a, 4), b)

test('sum integeres', () => {
    expect(sumIntegers1(3, 6)).toBe(18)
    expect(sumIntegers2(3, 6)).toBe(18)
})

test('sum cubes', () => {
    expect(sumCubes1(5, 9)).toBe(1925)
    expect(sumCubes2(5, 9)).toBe(1925)
})

test('sum pi', () => {
    expect(sumPi1(4, 7)).toBe(0.041666666666666664)
    expect(sumPi2(4, 7)).toBe(0.041666666666666664)
})
