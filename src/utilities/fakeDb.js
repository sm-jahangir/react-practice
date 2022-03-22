//use local storage to manage cart data
const addToDb = id => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
        console.log('Already Exist');
    } else {
        localStorage.setItem(id, 1);
    }
}

export {addToDb};