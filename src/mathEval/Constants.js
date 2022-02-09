export default null;

export const BINARY_OPERATIONS = {
    '+': (lhs, rhs) => lhs + rhs,
    '-': (lhs, rhs) => lhs - rhs,
    '*': (lhs, rhs) => lhs * rhs,
    '/': (lhs, rhs) => lhs / rhs,
    '%': (lhs, rhs) => lhs % rhs,
    '<<': (lhs, rhs) => lhs << rhs,
    '>>': (lhs, rhs) => lhs >> rhs,
};

export const UNARY_OPERATIONS = {
    '-': (arg) => -arg,
    ':': (arg) => Math.abs(arg),
};

export const SYNTAX_OPERANDS = '(),';

export const DEFAULT_ARGS = {
    'Math.PI': Math.PI,
    'Math.E': Math.E,
    'Math.LN10': Math.LN10,
    'Math.LN2': Math.LN2,
    'Math.LOG10E': Math.LOG10E,
    'Math.LOG2E': Math.LOG2E,
    'Math.SQRT1_2': Math.SQRT1_2,
    'Math.SQRT2': Math.SQRT2,
};

export const FUNCTIONAL_OPERATIONS = {
    'Math.abs': Math.abs,
    'Math.pow': Math.pow,
    'Math.min': Math.min,
    'Math.max': Math.max,
    'Math.sqrt': Math.sqrt,
    'Math.exp': Math.exp,
    'Math.ceil': Math.ceil,
    'Math.round': Math.round,
    'Math.floor': Math.floor,
    'Math.fround': Math.fround,
    'Math.random': Math.random,
    'Math.sign': Math.sign,
    'Math.sin': Math.sin,
    'Math.cos': Math.cos,
    'Math.tan': Math.tan,
    'Math.asin': Math.asin,
    'Math.acos': Math.acos,
    'Math.atan': Math.atan,
    'Math.asinh': Math.asinh,
    'Math.acosh': Math.acosh,
    'Math.atanh': Math.atanh,
};
