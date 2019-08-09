import React, { Component } from 'react';

import FloatingCartItem from './FloatingCartItem/FloatingCartItem';
import { updateTotal } from '../../helpers/helpers';

class floatingCart extends Component {

    state = {
        floatingCart: this.props.floatingCart,
        isOpen: false
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen !== this.state.isOpen) {
            this.setState({isOpen: nextProps.isOpen})
        }
    }

    cartTotal = () => {
        return updateTotal(this.state.floatingCart)
    }

    closeFloatingCart = () => {
        this.setState({ isOpen: false });
    };

    render (){

        let cartClasses = ['floating-cart'];

        if (this.state.isOpen) {
            cartClasses.push('slide-in');
        } else {
            cartClasses.push('slide-out');
        }

        if(this.state.floatingCart.length <= 0 && this.state.isOpen) {
            this.closeFloatingCart();
        }

        let floatingCartItems = (this.state.floatingCart.map(cartItem => (
            <FloatingCartItem cartItem={cartItem} key={cartItem.name} removeItemClicked={this.props.removeClicked}/>
        )))

        return (
            <div className={cartClasses.join(' ')}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shopping-cart">
                                <div className="floating-cart-header">
                                    <h3>Cart ({this.state.floatingCart.length})</h3>
                                    <span onClick={() => this.closeFloatingCart()} className="close-floating-cart">&times;</span>
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
                    
export default floatingCart;