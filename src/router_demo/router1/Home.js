import React from 'react'
import {HashRouter, Route, Link} from 'react-router-dom'
import About from './about';
import Topics from './topics';
import Main from './main';
export default class Home extends React.Component {

    render() {
        return (
            //hashrouter is root, need to include first to realize page jump
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/topics'>topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Route exact={true} path='/' component={Main}></Route>
                    <Route exact={true} path='/about' component={About}></Route>
                    <Route exact={true} path='/topics' component={Topics}></Route>
                </div>
            </HashRouter>
        );
    }
}