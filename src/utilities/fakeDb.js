
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