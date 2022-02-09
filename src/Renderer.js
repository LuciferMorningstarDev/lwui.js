/**
 * render current element at the page ( Inside the root element )
 * @param {HTMLElement} rootElement - the element where the content gets rendered
 * @param {HTMLElement} tag - the tag which should be rendered ( U can use the hashRouter provided with this framework )
 */
var render = (rootElement, tag) => {
    rootElement.appendChild(tag);
};

export default render;
