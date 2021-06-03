export class Control {
  constructor(parentNode = null, tagName = 'div', className = '', content = '') {
    const el = document.createElement(tagName);
    el.className = className;
    el.textContent = content;
    parentNode && parentNode.appendChild(el);
    this.node = el;
}
}
