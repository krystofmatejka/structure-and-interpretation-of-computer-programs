import {sqrt} from './sqrt.js'

test('sqrt', () => {
    expect(sqrt(9)).toBe(3.00009155413138)
    expect(sqrt(100)).toBe(10.000000000139897)
    expect(sqrt(500)).toBe(22.3606797800062)
    expect(sqrt(900)).toBe(30.00000230911258)
    expect(sqrt(1000)).toBe(31.622782450701045)
})
