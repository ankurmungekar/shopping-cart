import React, { Component } from 'react';

import CartItem from './CartItem/CartItem';
import { updateLocalStorageCart, getLocalStorageCart, updateTotal } from '../../helpers/helpers'

class Checkout extends Component {

    state = {
        products: getLocalStorageCart()
    }

    removeFromCartHandler = (product) => {
        const updatedProducts = this.state.products;
        updatedProducts[product.id].addedToCart = false;
        const index = updatedProducts.indexOf(product);
        if (index !== -1) {
            updatedProducts.splice(index, 1);
            this.setState({products: updatedProducts});
        }
        updateLocalStorageCart(this.state.products);
    }

    cartTotal = () => {
        return updateTotal(this.state.products)
    }

    render () {

        const cartItems = (
            this.state.products.map(cartItem => (
                <CartItem product={cartItem} removeClicked={this.removeFromCartHandler}/>
            ))
        )

        return (
            <div className="checkout-page">
                <div className="container">
                    <div className="card shopping-cart">
                        <div className="card-header">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
                            <div className="clearfix"></div>
                        </div>
                        <div className="card-body">
                            {cartItems}
                        </div>
                        <div className="card-footer">
                            <div className="pull-right">
                                <a href="" className="btn btn-success pull-right">Checkout</a>
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

export default Checkout