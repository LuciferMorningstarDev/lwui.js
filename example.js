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

import { a, div, center, h1, h2, h3, h4, ul, li, pre, code, i, UIRenderer, UIRouters, button, evalMath, textarea } from './src/lwui.js';
import exampleStyles from './example.css' assert { type: 'css' };

var preModule = `
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="module">
            import { div, h1, UIRenderer } from './src/lwui.js';
            var clicks = 0;
            window.addEventListener('DOMContentLoaded', () => {
                UIRenderer.render(
                    document.getElementById('root'),
                    div(h1("Nice this is a new great page")).click$(() => {
                        console.log("you clicked: " + clicks + " times");
                        clicks++;
                    })
                )
            }
        </script>
    </body>
</html>`;

var pre404 = `
import { a, div, h3, h4, pre, code, UIRenderer, UIRouters } from './src/lwui.js';
window.addEventListener('DOMContentLoaded', () => {
    UIRenderer.render(
        document.getElementById('root'),
        UIRouters.hashRouter(
        {
            '/': div(),
            '/404': div(
                h3('ERROR: That page does not exist'),
                div(a(h4('start')).attr$('href', '#/'))
                )
            }
        )
    )
}`;

var preEval = `
import { mathEval } from './src/lwui.js';
window.addEventListener('DOMContentLoaded', () => {
    var evaluations = [
        '10 * -20', 
        'Math.sin(Math.PI * 2)', 
        '( 1 + 2 ) * 3 / 2', 
        '1 + :-12', 
        '12 + contextVariable + 7 / 4', 
        '(contextFuncAdd(15, 15) + 1) % 3', 
        '2 >> 1', 
        '2 << 1'
    ];
    var ctx = {
        contextVariable: 250,
        contextFuncAdd: (a, b) => a + b,
    };
    if (evaluations.length > 0) console.log(\`-------------------------------------\`);
    for (const src of evaluations) {
        var lexer = new evalMath.Lexer(src);
        var compiledExpression = lexer.compile();
        var result = evalMath.eval(compiledExpression, ctx);
        console.log(\`Source: \${src}\`);
        console.log(\`Lexer: \`, lexer);
        console.log(\`Compiled: \`, compiledExpression);
        console.log(\`Result: \${result}\`);
        console.log(\`-------------------------------------\`);
    }
}`;
var clicks = 0;
window.addEventListener('DOMContentLoaded', () => {
    UIRenderer.addSheets(exampleStyles);
    UIRenderer.render(
        document.getElementById('root'),
        div(center(a('https://github.com/LuciferMorningstarDev/lwui.js', i(`fab fa-github fa-3x`)).attr$('target', '_blank'))).attr$('style', 'position:fixed;top:5;right:0;background:black;opacity:0.5;'),
        UIRouters.hashRouter({
            '/': div(
                div(
                    h1('Welcome to the LightweightUI Framework').css$({
                        color: 'silver',
                    }),
                    h2('Welcome to the LightweightUI Framework').css$({
                        color: 'blue',
                    }),
                    h3('Welcome to the LightweightUI Framework').css$({
                        color: 'gold',
                    }),
                    button('CLICK ME').click$(() => {
                        alertify.warning('you clicked: ' + clicks + ' times');
                        clicks++;
                    })
                ).css$({ 'text-align': 'center' }),
                div(h2('The main idea of LWUI'), div('Creating Routers and Elements for your page...', pre(code(preModule)))),
                div(h3('Pages available'), ul(li(a('404 Error Page').attr$('href', '#/404')), li(a('Mathematic Evaluations').attr$('href', '#/eval')), li(a('More Complex Routing').attr$('href', '#/complex-routing/'))).css$({ 'list-style': 'none' })).addClass$('pages')
            ).addClass$('main'),
            '/eval': div(
                h3('Mathematic EvaluationExample'),
                div(a(h4('start')).attr$('href', '#/'), button('Console Eval Example').click$(consoleMathEvaluationExample), div(pre(code(preEval)))),
                div(
                    'ShowCase',
                    div(textarea('Input').attr$('id', 'evalInput')),
                    div(
                        button('Evaluate Mathematic Expression').click$(() => {
                            evalExample(document.getElementById('evalInput'));
                        })
                    )
                )
            ),
            '/complex-routing/': UIRouters.hashRouter(
                {
                    '/': div(h1('Start conplex-routing'), a('More').attr$('href', '#/complex-routing/more'), a('Homepage').attr$('href', '#/')),
                    '/more': div(h1('Start conplex-routing - More'), a('Start').attr$('href', '#/complex-routing/'), a('Homepage').attr$('href', '#/')),
                },
                '/complex-routing'
            ),
            '/404': div(h3('ERROR: That page does not exist'), div(a(h4('start')).attr$('href', '#/'), div(pre(code(pre404))))),
        })
    );

    setTimeout(() => {
        UIRouters.syncRouters();
    }, 750);

    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });

    window.addEventListener('hashchange', () => {
        document.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightElement(el);
        });
    });
});

function consoleMathEvaluationExample() {
    var evaluations = ['10 * -20', 'Math.sin(Math.PI * 2)', '( 1 + 2 ) * 3 / 2', '1 + :-12', '12 + contextVariable + 7 / 4', '(contextFuncAdd(15, 15) + 1) % 3', '2 >> 1', '2 << 1'];
    var ctx = {
        contextVariable: 250,
        contextFuncAdd: (a, b) => a + b,
    };

    if (evaluations.length > 0) console.log(`-------------------------------------`);
    for (const src of evaluations) {
        var lexer = new evalMath.Lexer(src);
        var compiledExpression = lexer.compile();
        var result = evalMath.eval(compiledExpression, ctx);
        console.log(`Source: ${src}`);
        console.log(`Lexer: `, lexer);
        console.log(`Compiled: `, compiledExpression);
        console.log(`Result: ${result}`);
        console.log(`-------------------------------------`);
    }
}

function evalExample(textArea) {
    try {
        var src = textArea.value;
        var lexer = new evalMath.Lexer(src);
        var compiledExpression = lexer.compile();
        var result = evalMath.eval(compiledExpression);
        console.log(`Source: ${src}`);
        console.log(`Lexer: `, lexer);
        console.log(`Compiled: `, compiledExpression);
        console.log(`Result: ${result}`);
        console.log(`-------------------------------------`);
        alertify.warning('Result: ' + result);
    } catch (error) {
        alertify.warning(error.message);
    }
}
