import React from "react";
import { Link } from "react-router-dom";
import { AddtoCartBtn } from "../AddtoCartBtn/AddtoCartBtn";

export const ProductItem = ({ product }) => {
  return (
    <li className="product">
      <div className="product__img">
        <img src={product.image} alt={product.title} />
      </div>

      <h3 className="product__title">{product.title}</h3>
      <p className="product__price">
        {new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
      </p>
      <p className="product__description">{product.description}</p>
      <div className="product__btns">
          <Link to={`/products/${product.id}`} className="product__btn">Show more</Link>
          <AddtoCartBtn product={product}/>
      </div>
    </li>
  );
};
