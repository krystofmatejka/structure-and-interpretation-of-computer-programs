import {when, eq} from '../../lib.js'

/*
    Ben Bitdiddle has invented a test to determine
    whether the interpreter he is faced with is using applicative-
    order evaluation or normal-order evaluation. He defines the
    following two procedures:
* */

const p = () => p()

const _test = (x, y) => when(eq(x, 0), () => 0, () => y)

// _test(0, p())

/*
    Applicative order evaluation is an evaluation strategy
    in which an expression is evaluated by repeatedly evaluating
    its leftmost innermost reducible expression.
    This means that a function's arguments are evaluated before the function is applied.

    The result will be an infinite recursion.
*/

/*
    Normal order evaluation is an evaluation strategy
    in which an expression is evaluated by repeatedly evaluating
    its leftmost outermost reducible expression.
    This means that a function's arguments are not evaluated before the function is applied.

    The result will be 0
*/


test('exercise 1.5',  () => undefined)
