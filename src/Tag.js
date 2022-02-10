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

/**
 * Create a new Element by given tag name
 * @param {String} name
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns result
 */
export var Tag = (name, ...children) => {
    var result = document.createElement(name);
    for (const child of children) {
        if (typeof child === 'string') {
            result.appendChild(document.createTextNode(child));
        } else {
            result.appendChild(child);
        }
    }

    // append the HTMLElement by some functionality
    result.attr$ = (n, v) => {
        result.setAttribute(n, v);
        return result;
    };
    result.clear$ = () => {
        while (result.firstChild) {
            result.removeChild(result.lastChild);
        }
        return result;
    };
    result.css$ = (property, value) => {
        function addProperty(element, prop, val) {
            const camelProp = prop.replace(/(-[a-z])/, (part) => {
                return part.replace('-', '').toUpperCase();
            });
            element.style[camelProp] = val;
        }
        if (typeof property === 'object' && property !== null) {
            Object.keys(property).forEach((cssProperty) => {
                addProperty(result, cssProperty, property[cssProperty]);
            });
            return result;
        }
        addProperty(result, property, value);
        return result;
    };
    result.removeClass$ = (className) => {
        result.classList.remove(className);
        return result;
    };
    result.addClass$ = (className) => {
        result.classList.add(className);
        return result;
    };
    result.toggleClass$ = (className) => {
        result.classList.toggle(className);
        return result;
    };
    result.click$ = (callback) => {
        result.onclick = callback;
        return result;
    };

    return result;
};

export default Tag;
