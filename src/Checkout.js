import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <div className='checkout_top_banner'>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Guiltyminds/400x39-SWM_P._CB623277073_.jpg" />
                </div>
                <h1>Shoping Cart</h1>
                <small className='price_title'>Price</small>
                <hr></hr>
                <div className='cart_items'>
                    {
                        basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                
                            />
                           
                        )
 
                        )
                    }
                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout