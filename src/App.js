import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar, Aside, Footer} from './views/components'
import { Blank } from './views/pages'

export default class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Aside/>
                <Switch>
                    <Route path="/" component={Blank} exact strict/>
                    <Route path="*" component={Blank} exact/>
                </Switch>
                <Footer/>
            </>
        )
    }
}
