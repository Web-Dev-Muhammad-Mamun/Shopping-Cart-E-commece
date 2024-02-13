import React, { useContext } from 'react'
import { PRODUCTS } from '../../Product/Product'
import { ShopContext } from '../../Context/Shop_Context'
import CartItem from './CartItem'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import EmptyCartGif from '../../assets/emptyCart/emptycart (2).gif'


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
      : <div className='emptyCart'>
      <h1>
        Your Cart is Empty
      </h1> 
      <img src={EmptyCartGif} alt="" />
      </div>
      }
    </div>
  )
}

export default Cart