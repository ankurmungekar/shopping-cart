import React from 'react';

const FloatingCartItem = (props) => {
    return (
        <div className="floating-cart-product">
            <div className="product-image">
                <img src={props.cartItem.image} />
            </div>
            <div className="product-details">
                <div className="product-title"><strong>{props.cartItem.title}</strong></div>
                <p className="product-description">{props.cartItem.description}</p>
                <p className="product-quantity">
                    Quantity: 1
                </p>
                <p className="product-price">Price: Rs. <strong>{props.cartItem.price}</strong></p>
            </div>
            <div className="product-removal">
                <button className="remove-product" onClick={() => props.removeItemClicked(props.cartItem)}>Remove</button>
            </div>
        </div>
    )
}

export default FloatingCartItem;