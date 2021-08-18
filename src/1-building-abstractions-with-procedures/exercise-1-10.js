import {cond, eq, subtract, and, gt, sum} from '../../lib'

const ackermann = (m, n) => cond(
    [() => eq(m, 0), () => sum(n, 1)],
    [() => and(gt(m, 0), eq(n, 0)), () => ackermann(subtract(m, 1), 1)],
    [() => and(gt(m, 0), gt(n, 0)), () => ackermann(subtract(m, 1), ackermann(m, subtract(n, 1)))],
    [() => true, () => sum(n, 1)]
)

test('ackermann', () => {
    expect(ackermann(0, 0)).toBe(1)
    expect(ackermann(1, 1)).toBe(3)
    expect(ackermann(2, 2)).toBe(7)
    expect(ackermann(3, 3)).toBe(61)
})
