import {sum, multiply} from '../../lib.js'

//  390
//  multiply  26              15
//            sum 2 24        sum 3 5 7
//                  sum 4 6

console.log(
    multiply(
        sum(2, multiply(4, 6)),
        sum(3, 5, 7)
    )
)
