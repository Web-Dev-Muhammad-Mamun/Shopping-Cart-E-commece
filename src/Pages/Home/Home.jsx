import React from "react";
import "./Home.css";
import { PRODUCTS } from "../../Product/Product";
import Product from "./Product";
const Home = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>All In One</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
