// //use local storage to manage cart data
// const addToDb = id => {
//     const quantity = localStorage.getItem(id);
//     if (quantity) {
//         const newQuantity = parseInt(quantity) + 1;
//         localStorage.setItem(id, newQuantity);
//         console.log('Already Exist');
//     } else {
//         localStorage.setItem(id, 1);
//     }
// }

// export {addToDb};

//use local storage to manage cart data
const addToDb = id => {
    let shoppingCart;

    // get the shopping cart
    const storeCart = localStorage.getItem('shopping-cart');
    if (storeCart) {
        shoppingCart = JSON.parse(storeCart);
        console.log('ALready exist', shoppingCart);
    } else {
        shoppingCart = {};
    }

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }
    
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            // console.log('exist in the cart');
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    } else {
        
    }
}
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {addToDb, removeFromDb, deleteShoppingCart};