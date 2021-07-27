import {sqrt} from './sqrt.js'

test('sqrt', () => {
    expect(sqrt(9)).toBe(3.00009155413138)
    expect(sqrt(1000)).toBe(31.622782450701045)
})
