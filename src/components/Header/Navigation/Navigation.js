import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Aux from '../../../hoc/Aux/Aux';

class Navigation extends Component {
    render () {
        return (
            <Aux>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/products" activeClassName="active">Products</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/checkout" activeClassName="active">Checkout ({this.props.cart.length})</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink></li>
                    </ul>
                </div> 
            </Aux>
        )
    }
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Navigation);