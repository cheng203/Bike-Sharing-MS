import React from 'react'
export default class Child extends React.Component {

    constructor(props) {
        super(props);
    }
    componentWillMount(){
        console.log('will mount');
    }
    componentDidMount() {
        console.log('did mount');
    }
    componentWillReceiveProps(newProps){
        console.log('will props  ' + newProps.name)    
    }
    shouldComponentUpdate(){
        console.log('should update')
        return true;
    }
    componentWillUpdate(){
        console.log('will update')
    }
    componentDidUpdate(){
        console.log('did update')
    }
    render() {
        return (<div>
            <p>This is a test for child component</p>
            <p>{this.props.name}</p>
        </div>)
    }
}