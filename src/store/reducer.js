import * as actionType from './actions';

const initialState = {
    products: [],
    cart: [],
    isFloatingCartOpen: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_PRODUCT_TO_CART:
            return {
                ...state,
                cart: state.cart.concat(action.value),
                isFloatingCartOpen: true
            }
        case actionType.REMOVE_PRODUCT_FROM_CART:
            const itemIndex = state.cart.indexOf(action.value);
            return {
                ...state,
                cart: state.cart.filter( (item, index) => index !== itemIndex)
            }
        case actionType.ON_CLOSE_FLOATING_CART:
            return {
                ...state,
                isFloatingCartOpen: false
            }
        case actionType.ON_INCREASE_QUANTITY:
            return {
                ...state, 
                cart: state.cart.map((product) => {
                    if (product.id === action.value.id) {
                        return {...product, quantity: product.quantity + 1}
                    } else {
                        return product
                    }
                })
            }   
        case actionType.ON_DECREASE_QUANTITY:
            return {
                ...state, 
                cart: state.cart.map((product) => {
                    if (product.id === action.value.id && product.quantity > 1) {
                        return {...product, quantity: product.quantity - 1}
                    } else {
                        return product
                    } 
                })
            }        
        default: return state;
    }
};

export default reducer;




