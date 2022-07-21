import React from 'react'
import './product.css'
import { useStateValue } from './StateProvider';

function Product({ id, image, title, rating, price }) {
  const [{basket},dispatch]=useStateValue();
  
  const addtoBasket = ()=>{
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        image,
        title,
        price,
        rating,
      },
    })
  }

  return (
    // <div className='product_main'>
    <div className='product'>
      <img className='product_img' src={image} alt="product_image" />
      <div className='product_desc'>
        <p>{title}</p>
        <div className='product_rating'>
          {
              Array(rating)
              .fill()
              .map((_,i)=>(<p>⭐ </p>))
          }
        </div>
      </div>

      <div className='price_atc'>
        <div className='product_price'>
          <small>₹</small>
          <strong>{price}</strong>
        </div>
        <div className='product_atc'>
          <button onClick={addtoBasket} type="submit">Add to Cart</button>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Product