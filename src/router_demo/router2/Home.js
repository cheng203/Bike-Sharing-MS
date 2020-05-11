import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component {

    render() {
        return (
            //hashrouter is root, need to include first to realize page jump
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
                    {this.props.children}
                </div>
        );
    }
}