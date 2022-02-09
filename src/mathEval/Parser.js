import * as Constants from './Constants.js';
import Lexer from './Lexer.js';

export default null;

function parse_primary(lexer) {
    let token = lexer.next();
    if (token !== null) {
        if (token in Constants.UNARY_OPERATIONS) {
            let operand = parse(lexer);
            return {
                kind: 'unary_op',
                op: token,
                operand: operand,
            };
        } else if (token === '(') {
            let expr = parse(lexer);
            token = lexer.next();
            if (token !== ')') {
                throw new Error(`Expected ')' but got '${token}'`);
            }
            return expr;
        } else if (token === ')') {
            throw new Error(`No primary expression starts with ')'`);
        } else {
            let next_token = lexer.next();
            if (next_token === '(') {
                const args = [];

                next_token = lexer.next();
                if (next_token === ')') {
                    return {
                        kind: 'funcall',
                        name: token,
                        args: args,
                    };
                }

                lexer.pushBack(next_token);
                args.push(parse(lexer));

                next_token = lexer.next();
                while (next_token == ',') {
                    args.push(parse(lexer));
                    next_token = lexer.next();
                }

                if (next_token !== ')') {
                    throw Error(`Expected ')' but got '${next_token}'`);
                }

                return {
                    kind: 'funcall',
                    name: token,
                    args: args,
                };
            } else {
                if (next_token !== null) {
                    lexer.pushBack(next_token);
                }
                return {
                    kind: 'symbol',
                    value: token,
                };
            }
        }
    } else {
        throw new Error('Expected primary expression but reached the end of the input');
    }
}

export function parse(lexer) {
    let lhs = parse_primary(lexer);
    let op_token = lexer.next();
    if (op_token !== null) {
        if (op_token in Constants.BINARY_OPERATIONS) {
            let rhs = parse(lexer);
            return {
                kind: 'binary_op',
                op: op_token,
                lhs: lhs,
                rhs: rhs,
            };
        } else {
            lexer.pushBack(op_token);
        }
    }
    return lhs;
}

export function compile(src) {
    const lexer = new Lexer(src);
    const result = parse(lexer);
    const token = lexer.next();
    if (token !== null) {
        console.log(typeof token);
        console.log(token);
        throw new Error(`Unexpected token '${token}'`);
    }
    return result;
}

export function evaluateExpression(expression, user_context = {}) {
    console.assert(typeof expression === 'object');
    switch (expression.kind) {
        case 'symbol':
            {
                const value = expression.value;
                const number = Number(value);
                if (isNaN(number)) {
                    if (value in Constants.DEFAULT_ARGS) {
                        return Constants.DEFAULT_ARGS[value];
                    }

                    if (user_context && value in user_context) {
                        return user_context[value];
                    }

                    throw new Error(`Unknown variable '${value}'`);
                } else {
                    return number;
                }
            }
            break;
        case 'unary_op':
            {
                if (expression.op in Constants.UNARY_OPERATIONS) {
                    return Constants.UNARY_OPERATIONS[expression.op](evaluateExpression(expression.operand, user_context));
                }

                throw new Error(`Unknown unary operator '${expression.op}'`);
            }
            break;
        case 'binary_op':
            {
                if (expression.op in Constants.BINARY_OPERATIONS) {
                    return Constants.BINARY_OPERATIONS[expression.op](evaluateExpression(expression.lhs, user_context), evaluateExpression(expression.rhs, user_context));
                }

                throw new Error(`Unknown binary operator '${expression.op}'`);
            }
            break;
        case 'funcall':
            {
                if (expression.name in Constants.FUNCTIONAL_OPERATIONS) {
                    return Constants.FUNCTIONAL_OPERATIONS[expression.name](...expression.args.map((arg) => evaluateExpression(arg, user_context)));
                }

                if (user_context && expression.name in user_context) {
                    return user_context[expression.name](...expression.args.map((arg) => evaluateExpression(arg, user_context)));
                }

                throw new Error(`Unknown function '${expression.name}'`);
            }
            break;

        default: {
            throw new Error(`Unexpected AST node '${expression.kind}'`);
        }
    }
}
