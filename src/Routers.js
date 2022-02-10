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

import { div } from './lwui.js';

if (!window.hashRouters) {
    window.hashRouters = {
        addedListener: false,
        routers: [],
    };
}

if (!window.hashRouters.addedListener) {
    window.addEventListener('hashchange', (e) => {
        let hashLocation = document.location.hash.split('#')[1];
        if (!hashLocation) hashLocation = '/';
        window.hashRouters.routers.forEach((router) => {
            try {
                router.sync(hashLocation);
            } catch (error) {}
        });
    });
    window.hashRouters.addedListener = true;
}

export class Router {
    /**
     * @param {Object} routes
     * @param {String} base
     */
    constructor(routes, base = '') {
        this.routerLengthBefore = Object.keys(window.hashRouters.routers).length;
        this.routerIdName = 'router-' + (this.routerLengthBefore + 1);
        this.container = div().attr$('id', this.routerIdName);
        this.routes = routes;
        this.base = base != null && base != '' ? base : '/';
        this.targetRouters = {};
        Object.keys(this.routes).forEach((route) => {
            if (this.routes[route] instanceof Router) {
                this.targetRouters[route] = this.routes[route];
            }
        });
    }

    content(route = '/') {
        return this.routes[route];
    }

    sync(route = '/') {
        var original = route;
        if (!route.startsWith(this.base)) return;
        route = route.replace(this.base, '');
        if (route == '') route = '/';
        if (!route.startsWith('/')) route = '/' + route;

        // console.log('BASE: ', this.base, ' NEXT: ' + route);

        var targetRouter;

        Object.keys(this.targetRouters).forEach((possible) => {
            if (route.startsWith(possible)) {
                targetRouter = this.targetRouters[possible];
            }
        });

        if (!targetRouter) {
            if (!this.content(route) && !targetRouter) {
                window.location.hash = '#/404';
                return;
            }

            while (this.div().firstChild) {
                this.div().removeChild(this.div().lastChild);
            }
            this.div().appendChild(this.content(route));
        } else {
            while (this.div().firstChild) {
                this.div().removeChild(this.div().lastChild);
            }
            this.div().appendChild(targetRouter.div());
            targetRouter.sync(original);
        }
    }

    baseRoute() {
        return this.base;
    }

    div() {
        return this.container;
    }

    idName() {
        return this.routerIdName;
    }

    getRoutes() {
        return this.routes;
    }
}

/**
 * To create a new Router by using hash in location string
 * @param {Object} routes - the routes specified by an Object with containing paths
 * @returns {HTMLElement} resultElement of the router
 */
function hashRouter(routes, base = '/') {
    var router = new Router(routes, base);
    var hasRouter = false;
    window.hashRouters.routers.forEach((r) => (!hasRouter ? (hasRouter = r.baseRoute() == base) : false));
    if (!hasRouter) window.hashRouters.routers.push(router);
    router.sync('/');
    return router;
}

export default hashRouter;

export function syncRouters() {
    let hashLocation = document.location.hash.split('#')[1];
    if (!hashLocation) hashLocation = '/';
    window.hashRouters.routers.forEach((router) => {
        try {
            router.sync(hashLocation);
        } catch (error) {}
    });
}

/**
 * To create a new Router by using pathname in location string
 * @param {Object} routes - the routes specified by an Object with containing paths
 * @returns {HTMLElement} resultElement of the router
 */
export function locationRouter(routes) {
    console.assert(false, 'TODO: creating a location based router');
    return null;
}
