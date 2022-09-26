import React from 'react';

const Cart = ({cart}) => {
    return (
      <div>
        <h1>Order Summery</h1>
        <h4>Selected Items: {cart.length}</h4>
      </div>
    );
};

export default Cart;