import React from 'react';
import Size from './Size/Size';

const product = (props) => {

    const backgroundImageStyle = {
        backgroundImage: 'url("' + props.product.image + '")'
    }

    const sizes = (
        props.product.sizes.map(size => (
            <Size size={size} />
        ))
    )

    let productStatus;

    if(props.product.addedToCart) {
        productStatus = (
            <div className="image-holder added">
                <span className="image-holder__link"></span>
                <div className="image-liquid image-holder--original" style={backgroundImageStyle}></div>
            </div>
        )
    } else {
        productStatus = (
            <div className="image-holder" onClick={() => props.clicked(props.product)}>
                <span className="image-holder__link"></span>
                <div className="image-liquid image-holder--original" style={backgroundImageStyle}></div>
            </div>
        )
    }
        
    

    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <article className="card-wrapper">
                {productStatus}
                <div className="product-description">
                    <h1 className="product-description__title">
                        <span>{props.product.title}</span>
                    </h1>
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 product-description__category secondary-text">
                            {props.product.description}
                        </div>
                        <div className="col-xs-12 col-sm-4 product-description__price">
                            Rs. {props.product.price}
                        </div>
                    </div>
                    <hr />
                    <div className="sizes-wrapper">
                        <b>Sizes</b>
                        <br />
                        <span className="secondary-text text-uppercase">
                            <ul className="list-inline">
                               {sizes}								
                            </ul>
                        </span>
                    </div>
                    <div className="color-wrapper">
                        <b>Colors</b>
                        <br />
                        <ul className="list-inline color-list">
                            <li className="color-list__item color-list__item--red"></li>
                            <li className="color-list__item color-list__item--blue"></li>
                            <li className="color-list__item color-list__item--green"></li>
                            <li className="color-list__item color-list__item--orange"></li>
                            <li className="color-list__item color-list__item--purple"></li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default product;