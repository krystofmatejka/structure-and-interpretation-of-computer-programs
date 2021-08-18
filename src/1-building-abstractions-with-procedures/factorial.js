import {when, eq, multiply, subtract} from '../../lib'

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
