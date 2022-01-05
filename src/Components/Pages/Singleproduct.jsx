import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../../hooks/useFetching";
import ProductService from "../../Services/productService";
import { AddtoCartBtn } from "../AddtoCartBtn/AddtoCartBtn";
import { Loader } from "../Loader/Loader";
import { Template } from "../Template/Template";
import { ErrorPage } from "./ErrorPage";
import "./singleproduct.scss";

export const Singleproduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [fetchProduct, productLoading, productError] = useFetching(async () => {
    const response = await ProductService.getSingleProduct(id);
    setProduct(response.data);
  });

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
      return (
          <ErrorPage/>
      )
  }

  return (
    <Template
      content={ productLoading ? <Loader/> :
        <div className="container single-product__container">
          <h2 className="single-product__title">{product.title}</h2>
          <div className="single-product__body">
              <div className="single-product__img">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="single-product__tools">
                <ul className="single-product__features">
                  <li className="single-product__features-item">
                    <h3>Price: </h3>
                    {new Intl.NumberFormat("ru-RU", {
                      style: "currency",
                      currency: "USD",
                    }).format(product.price)}
                  </li>
                  <li className="single-product__features-item">
                    <h3>Category: </h3>
                    {product.category}
                  </li>
                  <li className="single-product__features-item">
                    <h3>Description: </h3>
                    {product.description}
                  </li>
                </ul>
                <AddtoCartBtn product = {product}/>
              </div>
          </div>
        </div>
      }
    />
  );
};
