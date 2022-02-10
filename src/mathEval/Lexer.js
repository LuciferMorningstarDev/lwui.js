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
