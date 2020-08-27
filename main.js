import {
    createElement,
    Component,
    render
} from './toy-react';

console.log(123);
class MyComponent extends Component {
    constructor() {
        super();
        console.log('MyComponent Constructor');
        this.state = {
            a:1,
            b:2,
        }
    }
    render() {
        return <div id="myComponent">
            <h1>MyComponent</h1>
            <span>{this.state.a.toString()}</span>
            {this.children}
        </div>
    }
}
class MyComponentOne extends Component {
    constructor() {
        super();
        console.log('MyComponentOne Constructor');
    }
    render() {
        return <div id="OneMyComponent">MyComponentOne</div>
    }
}

console.log(456);

render(<MyComponent id="a" class="c">
    < MyComponentOne > </MyComponentOne>
        <div id="b">anc</div>
        <footer>
            <span class="2">332</span>
        </footer>

    </MyComponent>, document.body);
console.log(789);
