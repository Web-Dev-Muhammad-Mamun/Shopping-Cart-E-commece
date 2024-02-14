import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/Shop_Context";

const Product = ({ product }) => {
  const { addToCart, cartItems } = useContext(ShopContext);

  const { id, productName, price, productImage } = product;
  const cartItemsAmount = cartItems[id];
  // useState[(cartItemsAmount, setCartItemsAmount)] = useState(
  //   cartItems[id] || 0
  // );
  // useEffect(() => {
  //   // Update cart items in localStorage whenever it changes
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }, [cartItems]);

  const handleAddToCart = () => {
    addToCart(id);
    // setCartItemsAmount(cartItemsAmount + 1);
  };
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
        addToCartBttn"
        onClick={handleAddToCart}
      >
        Add To Cart {cartItemsAmount > 0 && <> ({cartItemsAmount})</>}
      </button>
    </div>
  );
};

export default Product;
