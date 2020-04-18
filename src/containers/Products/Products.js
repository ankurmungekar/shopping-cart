import React, { Component } from 'react';
import axios from '../../axios';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';

import Aux from '../../hoc/Aux/Aux';
import Spinner from '../../components/UI/Spinner/Spinner';
import Product from '../../components/Product/Product';
import FloatingCart from '../../components/FloatingCart/FloatingCart';

class Products extends Component {
    state = {
        products: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/products.json')
            .then(response => {
                const fetchedProducts = [];
                for(let key in response.data) {
                    fetchedProducts.push({
                        ...response.data[key],
                        id: key
                    });
                }
                if (this.props.cart.length >= 0) {
                    this.props.cart.map(floatingCartItem => {
                        fetchedProducts.map(fetchedItem => {
                            if (floatingCartItem.id === fetchedItem.id) {
                                fetchedItem.addedToCart = true;
                            }
                        })
                    })
                }
                this.setState({loading: false, products: fetchedProducts});
            })
            .catch(error => {
                this.setState({loading: false});
            })
    }

    checkoutHandler = () => {
        this.props.history.push('/checkout');
    }

    openFloatingCart = () => {
        this.setState({isFloatingCartOpen: true})
    }

    render () {
        let products = (this.state.products.map(product => (
                <Product product={product} key={product.name} clicked={this.props.onAddToCart}/>
            ))
        );

        if (this.state.loading) {
            products = <Spinner />
        }

        return (
            <Aux>
                <div className="container">
                    <div className="row">
                        {products}
                    </div>
                </div>
                <div className="show-floating-cart-btn" onClick={this.openFloatingCart}>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
                <FloatingCart 
                    floatingCart={this.props.cart}
                    removeClicked={this.props.onRemoveFromToCart}
                    checkoutClicked={this.checkoutHandler} />
            </Aux>  
        );
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
        onAddToCart: (product) => dispatch({type: actionType.ADD_PRODUCT_TO_CART, value: product}),
        onRemoveFromToCart: (product) => dispatch({type: actionType.REMOVE_PRODUCT_FROM_CART, value: product})
    }
}  

export default connect(mapStateToProps, mapDispatchToProps)(Products);