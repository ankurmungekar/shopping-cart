import React, { Component } from 'react';
import axios from '../../axios';
import { updateLocalStorageCart, getLocalStorageCart} from '../../helpers/helpers'

import Aux from '../../hoc/Aux/Aux';
import Spinner from '../../components/UI/Spinner/Spinner';
import Product from '../../components/Product/Product';
import FloatingCart from '../../components/FloatingCart/FloatingCart';

class Products extends Component {
    state = {
        products: [],
        loading: true,
        floatingCart: getLocalStorageCart(),
        isFloatingCartOpen: false
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
                if (this.state.floatingCart.length >= 0) {
                    this.state.floatingCart.map(floatingCartItem => {
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

    addToCartHandler = (product) => {
        const updatedFloatingCart = this.state.floatingCart;
        const updatedProducts = this.state.products;
        updatedProducts[product.id].addedToCart = true;
        product.addedToCart = true;
        updatedFloatingCart.push(product);
        this.setState({products: updatedProducts, floatingCart:updatedFloatingCart, isFloatingCartOpen: true})
        updateLocalStorageCart(this.state.floatingCart);
    }

    removeFromCartHandler = (product) => {
        const updatedFloatingCart = this.state.floatingCart;
        const updatedProducts = this.state.products;
        updatedProducts[product.id].addedToCart = false;
        const index = updatedFloatingCart.indexOf(product);
        if (index !== -1) {
            updatedFloatingCart.splice(index, 1);
            this.setState({products: updatedProducts, floatingCart: updatedFloatingCart});
        }
        updateLocalStorageCart(this.state.floatingCart);
    }

    checkoutHandler = () => {
        updateLocalStorageCart(this.state.floatingCart);
        this.props.history.push('/checkout');
    }

    render () {
        let products = (this.state.products.map(product => (
                <Product product={product} key={product.name} clicked={this.addToCartHandler}/>
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
                <FloatingCart 
                    floatingCart={this.state.floatingCart} 
                    removeClicked={this.removeFromCartHandler} 
                    checkoutClicked={this.checkoutHandler}
                    isOpen={this.state.isFloatingCartOpen} />
            </Aux>  
        );
    }
}

export default Products