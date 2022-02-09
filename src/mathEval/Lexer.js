import * as Constants from './Constants.js';
import { compile } from './Parser.js';

export default class Lexer {
    constructor(src) {
        this.rawSource = src;
        this.src = src;
    }

    pushBack(token) {
        this.src = token + this.src;
    }

    next() {
        this.src = this.src.trimStart();
        if (this.src.length == 0) {
            return null;
        }
        function isOperant(c) {
            return c in Constants.BINARY_OPERATIONS || c in Constants.UNARY_OPERATIONS || Constants.SYNTAX_OPERANDS.includes(c);
        }
        if (isOperant(this.src[0])) {
            const token = this.src[0];
            this.src = this.src.slice(1);
            return token;
        }
        for (let i = 0; i < this.src.length; ++i) {
            if (isOperant(this.src[i]) || this.src[i] == ' ') {
                const token = this.src.slice(0, i);
                this.src = this.src.slice(i);
                return token;
            }
        }
        const token = this.src;
        this.src = '';
        return token;
    }

    raw = () => this.rawSource;

    compile = () => compile(this.rawSource);
}
