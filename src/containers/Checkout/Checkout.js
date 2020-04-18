import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';

import CartItem from './CartItem/CartItem';
import { updateLocalStorageCart, getLocalStorageCart, updateTotal } from '../../helpers/helpers'

class Checkout extends Component {

    cartTotal = () => {
        return updateTotal(this.props.cart)
    }

    render () {

        let cartItems = (
            this.props.cart.map(cartItem => (
                <CartItem 
                    product={cartItem} 
                    removeClicked={this.props.onRemoveFromToCart} 
                    increaseQuantityClicked={this.props.onIncreaseQuantity} 
                    decreaseQuantityClicked={this.props.onDecreaseQuantity} />
            ))
        )

        if (this.props.cart.length <= 0) {
            cartItems = <p className="text-center">Your cart is emty, go buy something</p>
        }

        return (
            <div className="checkout-page">
                <div className="container">
                    <div className="card shopping-cart">
                        <div className="card-header">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Order Summary
                            <div className="clearfix"></div>
                        </div>
                        <div className="card-body">
                            {cartItems}
                        </div>
                        <div className="card-footer">
                            <div className="pull-right">
                                <a href="" className="btn btn-success pull-right">Continue to Checkout</a>
                                <div className="total-price pull-right">
                                    Total: <b>Rs.{this.cartTotal()}</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveFromToCart: (product) => dispatch({type: actionType.REMOVE_PRODUCT_FROM_CART, value: product}),
        onIncreaseQuantity: (product) => dispatch({type: actionType.ON_INCREASE_QUANTITY, value: product}),
        onDecreaseQuantity: (product) => dispatch({type: actionType.ON_DECREASE_QUANTITY, value: product})
    }
}  

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);