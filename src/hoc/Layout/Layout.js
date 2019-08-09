import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

class Layout extends Component {
    render () {
        return (
            <Aux>
                <Header />
                {this.props.children}
                <Footer />
            </Aux>
        );
    }
}

export default Layout;
