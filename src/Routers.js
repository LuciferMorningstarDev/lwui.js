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
