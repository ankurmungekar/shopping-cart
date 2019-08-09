export function updateLocalStorageCart(data) {
    localStorage.setItem('cart', JSON.stringify(data))
}

export function getLocalStorageCart() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
}

export function updateTotal(data) {
    let total = 0;
    data.map(product => (
        total = total + parseInt(product.price * product.quantity)
    ));
    return total;
}

