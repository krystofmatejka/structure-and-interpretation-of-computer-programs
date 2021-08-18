import {cond, eq, subtract, sum, when} from '../../lib'

const fibonacci1 = (n) => cond(
    [() => eq(n, 0), () => 0],
    [() => eq(n, 1), () => 1],
    [() => true, () => sum(
        fibonacci1(subtract(n, 1)),
        fibonacci1(subtract(n, 2)),
    )]
)

test('fibonacci1', () => {
    expect(fibonacci1(0)).toBe(0)
    expect(fibonacci1(1)).toBe(1)
    expect(fibonacci1(5)).toBe(5)
    expect(fibonacci1(10)).toBe(55)
})

const fibonacci2 = (n) => {
    const iteration = (a, b, count) => when(
        eq(count, 0),
        () => b,
        () => iteration(sum(a, b), a, subtract(count, 1))
    )

    return iteration(1, 0, n)
}

test('fibonacci2', () => {
    expect(fibonacci2(0)).toBe(0)
    expect(fibonacci2(1)).toBe(1)
    expect(fibonacci2(5)).toBe(5)
    expect(fibonacci2(10)).toBe(55)
})
