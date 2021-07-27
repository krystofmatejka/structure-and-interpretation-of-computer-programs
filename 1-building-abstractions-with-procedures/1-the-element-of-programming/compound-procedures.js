import {square, sum} from '../../lib.js'

console.log(square(20))
console.log(square(square(3)))

const sumOfSquares = (x, y) => sum(square(x), square(y))

console.log(sumOfSquares(3, 4))
