class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
    console.log('ElementWrapper');
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }
  appendChild(component) {
    this.root.appendChild(component.root);
  }
}

class TextWrapper {
  constructor(content) {
    console.log('TextWrapper');
    this.root = document.createTextNode(content);
  }
}

export class Component {
  constructor() {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
    console.log('Component');
  }
  setAttribute(name, value) {
    this.props[name] = value
  }
  appendChild(component) {
    this.children.push(component);
  }
  get root() {
    if (!this._root) {
      this._root = this.render().root;
    }
    return this._root;
  }
}
export function createElement(type, attributes, ...children) {
  let e;
  console.log('createElement', type, attributes);
  if (typeof type === 'string') {
    e = new ElementWrapper(type);
  } else {
    e = new type;
  }

  for (let p in attributes) {
    e.setAttribute(p, attributes[p])
  }
  let insertChild = (children) => {
    console.log('insertChild');
    for (let child of children) {
      if (typeof child === 'string') {
        child = new TextWrapper(child)
      }
      if (typeof child === 'object' && child instanceof Array) {
        insertChild(child);
      } else {
        e.appendChild(child);
      }

    }
  }
  insertChild(children);
  return e;
}
export function render(component, parentElement) {
  console.log('render', component, parentElement);
  parentElement.appendChild(component.root);
}
