import { a, div, h1, h2, h3, h4, ul, li, pre, code, UIRenderer, UIRouters, button } from './src/lwui.js';

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
var clicks = 0;
window.addEventListener('DOMContentLoaded', () => {
    UIRenderer.render(
        document.getElementById('root'),
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
                div(h2('The main idea of LWUI'), div("Sorry for wrong x'ed tags but this way it is impossible to add it otherwise", pre(code(preModule)))),
                div(h3('Pages available'), ul(li(a('404 Error Page').attr$('href', '#/404'))).css$({ 'list-style': 'none' })).addClass$('pages')
            ).addClass$('main'),
            '/404': div(h3('ERROR: That page does not exist'), div(a(h4('start')).attr$('href', '#/'), div(pre(code(pre404))))),
        })
    );
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
    window.addEventListener('hashchange', () => {
        document.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightElement(el);
        });
    });
});
