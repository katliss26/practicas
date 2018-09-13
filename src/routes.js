import React from 'react'
import {Route} from 'react-router-dom'

import App from './components/App'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Page404 from './components/Page404'

const AppRoutes = () => (
    <App >

        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/" component={Home}/>
        <Route component={Page404}/>

    </App>
)
export default AppRoutes;
