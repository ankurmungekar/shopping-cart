import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';

import FloatingCartItem from './FloatingCartItem/FloatingCartItem';
import { updateTotal } from '../../helpers/helpers';

class floatingCart extends Component {

    cartTotal = () => {
        return updateTotal(this.props.cart)
    }

    render (){

        let cartClasses = ['floating-cart'];

        if (this.props.isFloatingCartOpen) {
            cartClasses.push('slide-in');
        } else {
            cartClasses.push('slide-out');
        }

        if(this.props.cart.length <= 0 && this.props.isFloatingCartOpen) {
            this.props.onCloseFloatingCart();
        }

        let floatingCartItems = (this.props.cart.map(cartItem => (
            <FloatingCartItem cartItem={cartItem} key={cartItem.name} removeItemClicked={this.props.removeClicked}/>
        )))

        return (
            <div className={cartClasses.join(' ')}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shopping-cart">
                                <div className="floating-cart-header">
                                    <h3>Cart ({this.props.cart.length})</h3>
                                    <span onClick={() => this.props.onCloseFloatingCart()} className="close-floating-cart">&times;</span>
                                </div>
                                { floatingCartItems }
                                <div className="cart-total">
                                    <strong>Total:</strong> Rs. {this.cartTotal()}
                                </div>
                                <div className="checkout">
                                    <button onClick={this.props.checkoutClicked}>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        isFloatingCartOpen: state.isFloatingCartOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCloseFloatingCart: () => dispatch({type: actionType.ON_CLOSE_FLOATING_CART})
    }
}
                    
export default connect(mapStateToProps, mapDispatchToProps)(floatingCart);