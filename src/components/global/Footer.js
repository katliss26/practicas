import React, { Component } from 'react';
import './css/Footer.css';
import PropTypes            from 'prop-types';

class Footer extends Component {
    static propTypes = {
        copyright: PropTypes.string
    }
    render() {
        const {copyright = 'React JS &copy; 2018.'} = this.props
        return (
            <div className="footer">
                <p dangerouslySetInnerHTML={{__html: copyright}}/>
            </div>
        );
    }
}

export default Footer;
