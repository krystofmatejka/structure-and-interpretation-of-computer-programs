export const sum = (...args) => args.reduce((p, c) => p + c)
export const subtract = (...args) => args.reduce((p, c) => p - c)
export const multiply = (...args) => args.reduce((p, c) => p * c)
export const divide = (...args) => args.reduce((p, c) => p / c)

export const square = (x) => multiply(x, x)

export const gt = (x, y) => x > y
export const eq = (x, y) => x === y
export const lt = (x, y) => x < y

export const cond = (...args) => (args.concat([() => true, () => false]).find(([p]) => p()))[1]()

export const when = (p, c, a) => (p) ? c() : a()

export const and = (...args) => args.reduce((p, c) => !!(p && c))
export const or = (...args) => args.reduce((p, c) => !!(p || c))
export const not = (e) => !e

export const gte = (x, y) => or(lt(x, y), eq(x, y))
export const lte = (x, y) => or(gt(x, y), eq(x, y))

export const avg = (...args) => divide(sum(...args), args.length)

export const abs = (x) => cond(
    [() => gt(x, 0), () => x],
    [() => eq(x, 0), () => 0],
    [() => lt(x, 0), () => -x]
)
