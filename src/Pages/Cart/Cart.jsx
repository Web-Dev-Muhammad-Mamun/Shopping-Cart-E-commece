import React, { useContext } from 'react'
import { PRODUCTS } from '../../Product/Product'
import { ShopContext } from '../../Context/Shop_Context'
import CartItem from './CartItem'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const {cartItems, getTotalCartAmount } = useContext(ShopContext)
  let totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>
          Your Cart Items
        </h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((addedItems) => {
          if(cartItems[addedItems.id] !== 0) {
            return <CartItem key={addedItems} addedItems = {addedItems}/>
          }
        })}
      </div>
      {totalAmount > 0 ?
      <div className="checkout">
        <p>Subtotal : $  {totalAmount}</p>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      : <h1>
        Your Cart is Empty
      </h1> }
    </div>
  )
}

export default Cart