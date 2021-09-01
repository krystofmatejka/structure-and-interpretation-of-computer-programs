import {when, lt, sum, subtract, multiply} from '../../lib'

const f1 = (n) => when(
    lt(n, 3),
    () => n,
    () => sum(
        f1(subtract(n, 1)),
        multiply(
            f1(subtract(n, 2)),
            2),
        multiply(
            f1(subtract(n, 3)),
            3)
    )
)

test('exercise 1.11', () => {
    expect(f1(1)).toBe(1)
    expect(f1(2)).toBe(2)
    expect(f1(3)).toBe(4)
    expect(f1(4)).toBe(11)
    expect(f1(5)).toBe(25)
})
