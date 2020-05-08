import React from 'react'
import Child from './child'
export default class Life extends React.Component {

    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    handleAdd = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        let style = {
            padding: 30
        }
        return (<div style={style}>
            <p>react life cycle</p>
            <button onClick={this.handleAdd}>click here</button>
            <p>{this.state.counter}</p>
            <Child name={this.state.counter}></Child>
        </div>)
    }
}