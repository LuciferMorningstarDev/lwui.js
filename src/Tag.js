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
