import React, { useContext } from "react";
import { ShopContext } from "../../Context/Shop_Context";

const Product = ({ product }) => {
    const {addToCart, cartItems} = useContext(ShopContext) 
  const { id, productName, price, productImage } = product;
  const cartItemsAmount = cartItems[id]
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button
        className="
        addToCartBttn" onClick={() => addToCart(id)}
      >
        Add To Cart {cartItemsAmount > 0 && <> ({cartItemsAmount})</>}
      </button>
    </div>
  );
};

export default Product;
