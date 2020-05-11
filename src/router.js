import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/login/index'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import NoMatch from './pages/noMatch/index'
import App from './App'

export default class IRouter extends React.Component {

    render() {
        return (
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' render={()=>
                        <Admin>
                            <Switch>
                                <Route path='/admin/ui/buttons' component={Buttons}></Route>
                                <Route path='/admin/ui/modals' component={Modals}></Route>
                                <Route path='/admin/ui/notification' component={Notice}></Route>
                                <Route path='/admin/ui/loadings' component={Loadings}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                </App>
            </HashRouter>
        );
    }
}