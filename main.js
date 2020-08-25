import {
    createElement,
    Component,
    render
} from './toy-react';

class MyComponent extends Component {
    render() {
        return <div>MyComponent</div>
    }
}



render(<MyComponent id="a" class="c">
        {/* <div>anc</div>
        <div></div> */}
    </MyComponent>, document.body);
