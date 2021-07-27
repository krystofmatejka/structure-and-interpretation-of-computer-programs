import {abs, abs2} from './conditional-expressions.js'

test('abs', () => {
    expect(abs(10)).toBe(10)
    expect(abs(0)).toBe(0)
    expect(abs(-10)).toBe(10)
})

test('abs2', () => {
    expect(abs2(10)).toBe(10)
    expect(abs2(0)).toBe(0)
    expect(abs2(-10)).toBe(10)
})
