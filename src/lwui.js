import Tag from './Tag.js';
import render from './Renderer.js';
import hashRouter, { locationRouter } from './Routers.js';

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
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns a
 */
export var a = (...children) => Tag('a', ...children);
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
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns img
 */
export var img = (src) => Tag('img').attr$('src', src);
/**
 * Create a new svg
 * @param  {...HTMLElement | String} children - the attached children of this element
 * @returns svg
 */
export var svg = (src) => Tag('svg').attr$('src', src);

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
};

/**
 * returns a representation of file ./Renderer.js
 */
export var UIRenderer = {
    render: render,
};
