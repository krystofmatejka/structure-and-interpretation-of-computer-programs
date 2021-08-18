import {cond, eq, subtract, sum, when} from '../../lib'

const F1 = (n) => cond(
    [() => eq(n, 0), () => 0],
    [() => eq(n, 1), () => 1],
    [() => true, () => sum(
        F1(subtract(n, 1)),
        F1(subtract(n, 2)),
    )]
)

test('fibonacci1', () => {
    expect(F1(0)).toBe(0)
    expect(F1(1)).toBe(1)
    expect(F1(5)).toBe(5)
    expect(F1(10)).toBe(55)
})

const F2 = (n) => {
    const iteration = (a, b, count) => when(
        eq(count, 0),
        () => b,
        () => iteration(sum(a, b), a, subtract(count, 1))
    )

    return iteration(1, 0, n)
}

test('fibonacci2', () => {
    expect(F2(0)).toBe(0)
    expect(F2(1)).toBe(1)
    expect(F2(5)).toBe(5)
    expect(F2(10)).toBe(55)
})
