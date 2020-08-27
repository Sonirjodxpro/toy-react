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
    console.info('%cGET ROOT', 'color: white;font-weight: 700;background: blue');
    if (!this._root) {
      console.log('--------------this.render----------', this.render);
      let obj = this.render();
      console.info('--------------this.render()--------------------', obj);
      this._root = obj.root;
    }
    console.log('cl-----------', '_root', this._root);
    return this._root;
  }
}
export function createElement(type, attributes, ...children) {
  let e;
  console.group();
  console.log('createElement', type, attributes);
  if (typeof type === 'string') {
    e = new ElementWrapper(type);
  } else {
    e = new type;
  }

  for (let p in attributes) {
    e.setAttribute(p, attributes[p])
  }
  console.group();
  let insertChild = (children) => {

    for (let child of children) {
      if (typeof child === 'string') {
        child = new TextWrapper(child)
      }
      console.log('insertChild', child);
      if (typeof child === 'object' && child instanceof Array) {
        insertChild(child);
      } else {
        e.appendChild(child);
      }

    }
  }
  insertChild(children);
  console.groupEnd();
  console.groupEnd();
  return e;
}
export function render(component, parentElement) {
  console.log('render', component, parentElement);
  parentElement.appendChild(component.root);
}
