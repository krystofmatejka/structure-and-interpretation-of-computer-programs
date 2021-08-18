import {when, eq, multiply, subtract, gt, sum} from '../../lib'

const factorial = (x) => when(
    eq(x, 1),
    () => 1,
    () => multiply(
        x,
        factorial(subtract(x, 1))
    )
)

test('factorial', () => {
    expect(factorial(1)).toBe(1)
    expect(factorial(5)).toBe(120)
    expect(factorial(10)).toBe(3_628_800)
})

const factorial2 = (x) => {
    const iteration = (product, counter) => when(
        gt(counter, x),
        () => product,
        () => iteration(
            multiply(counter, product),
            sum(counter, 1)
        )
    )

    return iteration(1, 1)
}

test('factorial2', () => {
    expect(factorial2(1)).toBe(1)
    expect(factorial2(5)).toBe(120)
    expect(factorial2(10)).toBe(3_628_800)
})
