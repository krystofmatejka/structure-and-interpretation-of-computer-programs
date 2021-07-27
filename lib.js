export const sum = (...args) => args.reduce((p, c) => p + c)
export const multiply = (...args) => args.reduce((p, c) => p * c)
export const square = (x) => multiply(x, x)
