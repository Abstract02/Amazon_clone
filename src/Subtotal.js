import './Subtotal.css'
import React from 'react'
import { useStateValue } from './StateProvider';
import { getbaskettotal } from './reducer';

function Subtotal() {
  const [{basket}]=useStateValue();
  return (
    <div className='subtotal'>
          <>
            <p>
              Subtotal ({basket.length} items): <strong>₹ {getbaskettotal(basket)}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        {/* <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getbaskettotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      /> */}

      <button>Proceed to Checkout</button> 

    </div>
  )
}

export default Subtotal