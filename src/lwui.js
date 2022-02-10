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

import Tag from './Tag.js';
import render, { addSheets, addSheetAsArray, loadSass } from './Renderer.js';
import hashRouter, { locationRouter, syncRouters } from './Routers.js';
import mathEvaluation from './mathEval/eval.js';

export var evalMath = mathEvaluation;

/**
 * Create a new canvas
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns canvas
 */
export var canvas = (...children) => Tag('canvas', ...children);

/**
 * Create a new div
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns div
 */
export var div = (...children) => Tag('div', ...children);

/**
 * Create a new center
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns center
 */
export var center = (...children) => Tag('center', ...children);

/**
 * Create a new empty div
 * @returns empty
 */
export var empty = () => Tag('div');

/**
 * Create a new span
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns span
 */
export var span = (...children) => Tag('span', ...children);

/**
 * Create a new h1
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns h1
 */
export var h1 = (...children) => Tag('h1', ...children);
/**
 * Create a new h2
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns h2
 */
export var h2 = (...children) => Tag('h2', ...children);
/**
 * Create a new h3
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns h3
 */
export var h3 = (...children) => Tag('h3', ...children);
/**
 * Create a new h4
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns h4
 */
export var h4 = (...children) => Tag('h4', ...children);
/**
 * Create a new h5
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns h5
 */
export var h5 = (...children) => Tag('h5', ...children);
/**
 * Create a new h6
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns h6
 */
export var h6 = (...children) => Tag('h6', ...children);

/**
 * Create a new a
 * @param  {String} href - the link to the element
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns a
 */
export var a = (href = '', ...children) => {
    if (typeof href == 'string') {
        try {
            let url = new URL(href);
            return Tag('a', ...children).attr$('href', href);
        } catch (err) {
            return Tag('a', href, ...children);
        }
    } else return Tag('a', href, ...children);
};
/**
 * Create a new p
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns p
 */
export var p = (...children) => Tag('p', ...children);

/**
 * Create a new form
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns form
 */
export var form = (...children) => Tag('form', ...children);
/**
 * Create a new select
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns select
 */
export var select = (...children) => Tag('select', ...children);
/**
 * Create a new input
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns input
 */
export var input = (...children) => Tag('input', ...children);
/**
 * Create a new button
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns button
 */
export var button = (...children) => Tag('button', ...children);
/**
 * Create a new textarea
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns textarea
 */
export var textarea = (...children) => Tag('textarea', ...children);
/**
 * Create a new code
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns code
 */
export var code = (...children) => Tag('code', ...children);
/**
 * Create a new pre
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns pre
 */
export var pre = (...children) => Tag('pre', ...children);

/**
 * Create a new img
 * @param  {String} src -  the image source
 * @returns img
 */
export var img = (src) => Tag('img').attr$('src', src);
/**
 * Create a new svg
 * @param  {String} src - the image source
 * @returns svg
 */
export var svg = (src) => Tag('svg').attr$('src', src);

/**
 * Create a new icon
 * @param  {String} classes - the icon classes
 * @returns icon
 */
export var icon = (classes) => Tag('i').attr$('class', classes);

/**
 * Create a new icon
 * @param  {String} classes - the icon classes
 * @returns icon
 */
export var i = (classes) => Tag('i').attr$('class', classes);

/**
 * Create a new ul
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns ul
 */
export var ul = (...children) => Tag('ul', ...children);
/**
 * Create a new ol
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns ol
 */
export var ol = (...children) => Tag('ol', ...children);
/**
 * Create a new li
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns li
 */
export var li = (...children) => Tag('li', ...children);

/**
 * returns a representation of file ./Routers.js
 */
export var UIRouters = {
    hashRouter: hashRouter,
    locationRouter: locationRouter,
    syncRouters: syncRouters,
};

/**
 * returns a representation of file ./Renderer.js
 */
export var UIRenderer = {
    render: render,
    addSheets: addSheets,
    addSheetAsArray: addSheetAsArray,
    loadSass: loadSass,
};
