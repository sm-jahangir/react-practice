
const adToCartDb = (id) => {
    let shoppingCart = {};
    //get the shopping cart
    const storeCart = localStorage.getItem('shopping-cart');
    if (storeCart) {
        // storeCart ta string karon amra atake string hisabe save korchi mane object take amra string hisabe save korchilam
        shoppingCart = JSON.parse(storeCart);
        // akhane JSON.parse String data ta object hoye jabe abr ager moto
    }

    // JSON.stringify deya hoy karon shoppingCart object take string a convert korar jonno
    // localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart)); //
    //oporer 2 line rakha hoiche je kivabe empty object localstorage a save kora jay ata dekhar jonno

    // shoppingCart object er vitore "id" ta ache kina seta check korte hobe
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;
    }else {
        shoppingCart[id] = 1;
    }
    
    // JSON.stringify deya hoy karon shoppingCart object take string a convert korar jonno
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}
const removeToCartDb = (id) => {
    const storeCart = localStorage.getItem('shopping-cart');
    if(storeCart) {
        const shoppingCart = JSON.parse(storeCart);
        if (id in shoppingCart) {
            // console.log('exist in jthe cart')
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {adToCartDb, removeToCartDb, deleteShoppingCart};

/*
const adToCartDb = (id) => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }else {
        localStorage.setItem(id, 1);
    }
}
const removeToCartDb = (id) => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        const newQuantity = parseInt(quantity) - 1;
        localStorage.setItem(id, newQuantity);
    }
}

export {adToCartDb, removeToCartDb};
*/