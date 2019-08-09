import React from 'react'

const cartItem = (props) => {
    return (
        <div className="row cart-item">
            <div className="col-12 col-sm-12 col-md-2 image">
                <img className="img-responsive" src={props.product.image} alt="prewiew" />
            </div>
            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6 cart-item-details">
                <h5 className="product-name">{props.product.title}</h5>
                <div className="item-description">{props.product.description}</div>
                <div>
                    <p className="quantity-count">Quantity: <strong>{props.product.quantity}</strong></p>
                    <p className="quantity-count">Size: <strong>XL</strong></p>
                </div>
            </div>
            <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row pricing">
                <div className="col-3 col-sm-3 col-md-6 text-md-right">
                    <h6>Rs.{props.product.price}</h6>
                </div>
                <div className="col-4 col-sm-4 col-md-4">
                    <div className="quantity">
                        <input type="button" value="+" className="plus" onClick={() => props.increaseQuantityClicked(props.product)} />
                        <input type="number" step="1" max="99" min="1" value={props.product.quantity} title="Qty" className="qty" size="4" />
                        <input type="button" value="-" className="minus" onClick={() => props.decreaseQuantityClicked(props.product)} />
                    </div>
                </div>
                <div className="col-2 col-sm-2 col-md-2 text-right">
                    <button type="button" className="btn btn-outline-danger btn-xs" onClick={() => props.removeClicked(props.product)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default cartItem;