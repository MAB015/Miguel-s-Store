/**
 * This function calculate total price of a new order
 * @param {Array} products cartProducts: Arry of Objects
 * @returns {number} Total price of products
 */

export const totalPrice = (products) => {
    return products.reduce((totalPrice, product) => totalPrice + product.price, 0)
}