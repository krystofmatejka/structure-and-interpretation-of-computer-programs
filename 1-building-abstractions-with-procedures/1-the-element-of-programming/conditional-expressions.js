import {cond, eq, gt, lt, xif} from '../../lib.js'

export const abs = (x) => cond(
    [gt(x, 0), x],
    [eq(x, 0), 0],
    [lt(x, 0), -x]
)

export const abs2 = (x) => xif(lt(x, 0), -x, x)
