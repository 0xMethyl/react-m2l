import React from 'react';

const Cart = () => {

    const saved = localStorage.getItem("produits");
    console.log(saved);

    const initialValue = JSON.parse(saved);
    alert(initialValue);
    
    return (
        <div className='cart'>

        </div>
    )
}

export default Cart;