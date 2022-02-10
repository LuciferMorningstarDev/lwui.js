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
 * To create a new Router by using hash in location string
 * @param {Object} routes - the routes specified by an Object with containing paths
 * @returns {HTMLElement} resultElement of the router
 */
function hashRouter(routes) {
    let result = document.createElement('div');
    function syncHash() {
        let hashLocation = document.location.hash.split('#')[1];
        if (!hashLocation) {
            hashLocation = '/';
        }
        if (!(hashLocation in routes)) {
            const route404 = '/404';
            console.assert(route404 in routes);
            hashLocation = route404;
        }
        while (result.firstChild) {
            result.removeChild(result.lastChild);
        }
        result.appendChild(routes[hashLocation]);
        return result;
    }
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return result;
}

export default hashRouter;

/**
 * To create a new Router by using pathname in location string
 * @param {Object} routes - the routes specified by an Object with containing paths
 * @returns {HTMLElement} resultElement of the router
 */
export function locationRouter(routes) {
    let result = document.createElement('div');
    function syncHash() {
        let hashLocation = document.location.pathname;
        if (!hashLocation) {
            hashLocation = '/';
        }
        if (!(hashLocation in routes)) {
            const route404 = '/404';
            console.assert(route404 in routes);
            hashLocation = route404;
        }
        while (result.firstChild) {
            result.removeChild(result.lastChild);
        }
        result.appendChild(routes[hashLocation]);
        return result;
    }
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return result;
}
