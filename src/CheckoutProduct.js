import React from 'react'
import './CheckoutProduct.css';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket},dispatch]=useStateValue();
    const removefrombasket =()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} />
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>
                    {title}
                </p>
                <p>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct_rating'>
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) =>
                                <p>⭐</p>
                            )
                    }
                </div>
                <button onClick={removefrombasket}>Remove from Basket </button>
            </div>
        </div>
    )
}

export default CheckoutProduct