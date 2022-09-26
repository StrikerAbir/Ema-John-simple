import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // way 1 calculate total
    // let total = 0;
    // for (const product of cart) {
    //     total = total + product.price;
    // }
    // way 2 
    const total = cart.reduce((previous, current) => previous + current.price, 0)
    
    const tax = parseFloat(total * 0.1).toFixed(2);
    return (
      <div className='cart'>
        <h1>Order Summery</h1>
        <p>Selected Items: {cart.length}</p>
        <p>Total Prize: $ {total}</p>
        <p>Total Shipping: {tax}</p>
        <p>Tax: {cart.length}</p>
        <h4>Grand Total: {cart.length}</h4>
      </div>
    );
};

export default Cart;