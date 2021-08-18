import {cond, eq, subtract, and, gt, sum} from '../../lib'

const A = (m, n) => cond(
    [() => eq(m, 0), () => sum(n, 1)],
    [() => and(gt(m, 0), eq(n, 0)), () => A(subtract(m, 1), 1)],
    [() => and(gt(m, 0), gt(n, 0)), () => A(subtract(m, 1), A(m, subtract(n, 1)))],
    [() => true, () => sum(n, 1)]
)

test('ackermann', () => {
    expect(A(0, 0)).toBe(1)
    expect(A(1, 1)).toBe(3)
    expect(A(2, 2)).toBe(7)
    expect(A(3, 3)).toBe(61)
})
