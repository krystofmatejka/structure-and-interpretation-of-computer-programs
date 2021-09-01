import {when, gt, sum, cube, divide, multiply, identity} from '../../lib'

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

const sumHop = (a, b, term, next) => when(
    gt(a, b),
    () => 0,
    () => sum(
        term(a),
        sumHop(next(a), b, term, next)
    )
)

const sumIntegers2 = (a, b) => sumHop(
    a,
    b,
    identity,
    (a) => sum(a, 1)
)

const sumCubes2 = (a, b) => sumHop(
    a,
    b,
    (a) => cube(a),
    (a) => sum(a, 1)
)

const sumPi2 = (a, b) => sumHop(
    a,
    b,
    (a) => divide(1, multiply(a, sum(a, 2))),
    (a) => sum(a, 4)
)

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
