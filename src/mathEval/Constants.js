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
};

export const FUNCTIONAL_OPERATIONS = {
    'Math.sin': Math.sin,
    'Math.cos': Math.cos,
    'Math.abs': Math.abs,
    'Math.asin': Math.asin,
    'Math.acos': Math.acos,
    'Math.tan': Math.tan,
};
