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

import { Router } from './Routers.js';

import defaultsSheet from './css/defaults.css' assert { type: 'css' };

window.sassLoaded = false;

/**
 * render current element at the page ( Inside the root element )
 * @param {HTMLElement} rootElement - the element where the content gets rendered
 * @param {HTMLElement | Router} tag - the tag which should be rendered ( U can use the hashRouter provided with this framework )
 */
var render = (rootElement, ...tags) => {
    var sassCompiler = document.createElement('script');
    sassCompiler.src = 'https://unpkg.com/sass.js@latest/dist/sass.js';
    sassCompiler.onload = () => (window.sassLoaded = true);
    document.head.appendChild(sassCompiler);
    addSheets(defaultsSheet);
    for (let tag of tags) {
        if (tag instanceof Router) {
            return rootElement.appendChild(tag.div());
        } else rootElement.appendChild(tag);
    }
};

/**
 * @param {StyleSheet[]} sheets
 */
export var addSheets = (...sheets) => {
    document.adoptedStyleSheets = [...(document.adoptedStyleSheets != null ? document.adoptedStyleSheets : []), ...sheets];
};

/**
 * @param {StyleSheet[]} sheets
 */
export var addSheetAsArray = (sheets) => {
    document.adoptedStyleSheets = [...(document.adoptedStyleSheets != null ? document.adoptedStyleSheets : []), ...sheets];
};

export var loadSass = async (sassSheet) => {
    while (!window.sassLoaded) {
        await new Promise((resolve) => setTimeout(resolve, 100));
    }
    console.log(Sass);
};

export default render;
