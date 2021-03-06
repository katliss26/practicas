import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './css/Content.css';

class Content extends Component {
    static propTypes ={
        children: PropTypes.object.isRequired
    }
    render() {
        const { body } = this.props
        return (
            <div className="content">
                { body }
            </div>
        );
    }
}

export default Content;
