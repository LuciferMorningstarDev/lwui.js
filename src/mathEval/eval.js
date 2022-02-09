import * as Constants from './Constants.js';
import Lexer from './Lexer.js';
import * as Parser from './Parser.js';

var mathEvaluation = {
    Constants: Constants,
    Lexer: Lexer,
    Parser: Parser,
    eval: Parser.evaluateExpression,
};

export default mathEvaluation;
