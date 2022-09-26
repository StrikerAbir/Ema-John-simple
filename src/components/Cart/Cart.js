import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // way 1 calculate total
    // let total = 0;
    // let shipping = 0;
    // for (const product of cart) {
    //     total = total + product.price;
    // shipping = shipping + product.shipping;
    // }
    // way 2 
    const total = cart.reduce((previous, current) => previous + current.price, 0);
    const shipping = cart.reduce((previous, current) => previous + current.shipping, 0);
    
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
      <div className='cart'>
        <h1>Order Summery</h1>
        <p>Selected Items: {cart.length}</p>
        <p>Total Prize: $ {total}</p>
        <p>Total Shipping: {shipping}</p>
        <p>Tax: {tax}</p>
        <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
      </div>
    );
};

export default Cart;