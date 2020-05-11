import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import About from './../router1/about';
import Topics from './../router1/topics';
import Main from './../router1/main';
import Home from './Home'
export default class IRouter extends React.Component {


    render() {
        return (
            <Router>
                <Home>
                    <Route exact={true} path='/' component={Main}></Route>
                    <Route exact={true} path='/about' component={About}></Route>
                    <Route exact={true} path='/topics' component={Topics}></Route>
                </Home>
            </Router>
        );
    }
}