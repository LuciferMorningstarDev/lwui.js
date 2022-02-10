/**
 * Copyright (c) 2022 LuciferMorningstarDev
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * Contact:
 *   Email:  contact@lucifer-morningstar.xyz
 *
 * Other Links
 *   Github: https://github.com/LuciferMorningstarDev
 */

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
    'Number.MAX_SAFE_INTEGER': Number.MAX_SAFE_INTEGER,
    'Number.MAX_VALUE': Number.MAX_VALUE,
    'Number.MIN_SAFE_INTEGER': Number.MIN_SAFE_INTEGER,
    'Number.MIN_VALUE': Number.MIN_VALUE,
    'Number.EPSILON': Number.EPSILON,
    'Number.NEGATIVE_INFINITY': Number.NEGATIVE_INFINITY,
    'Number.POSITIVE_INFINITY': Number.POSITIVE_INFINITY,
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
    'Number.parseFloat': Number.parseFloat,
    'Number.parseInt': Number.parseInt,
};
