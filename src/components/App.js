import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Header from "./global/Header"
import Content from "./global/Content"
import Footer from "./global/Footer"
import items from "../data/menu"

class App extends Component {
    static propTypes ={
        children: PropTypes.object.isRequired
    }
    render() {
        const { children } = this.props
        return (
            <div className="App">
                <Header title="My Example" items={items}/>
                <Content body={children}/>
                <Footer copyright="Pacticas React JS &copy; 2018."/>
            </div>
        );
    }
}

export default App;
