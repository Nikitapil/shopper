import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProducts } from "../../redux/action";
import { Categories } from "../Categories/Categories";
import { Loader } from "../Loader/Loader";
import { ProductItem } from "../productItem/ProductItem";
import { SearchForm } from "../SearchForm/SearchForm";
import { Template } from "../Template/Template";
import "./mainpage.scss";

export const MainPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const isPostsLoading = useSelector((state) => state.app.isAllPostsLoading);
  const categories = useSelector((state) => state.products.categories);
  const categoriesLoading = useSelector(
    (state) => state.app.isCategoriesLoading
  );
  const [currentCategory, setCurrentCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    dispatch(fetchProducts(currentCategory, searchQuery));
  }, [dispatch, currentCategory, searchQuery]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);



  return (
    <Template
      content={
        <div className="container mainpage__container">
          <h2 className="mainpage__title">Our Products</h2>
          <div className="mainpage__filters">
            <Categories
              value={currentCategory}
              isLoading={categoriesLoading}
              options={categories}
              setCategory={setCurrentCategory}
            />
            <SearchForm setSearchQuery={setSearchQuery} disable={isPostsLoading} />
          </div>
          {isPostsLoading ? (
            <Loader />
          ) : (
            <ul className="mainpage__products">
              {products.length > 0 ? products.map((product) => {
                return <ProductItem product={product} key={product.id} />;
              }) : <h3>Products Not Found</h3>}
            </ul>
          )}
        </div>
      }
    />
  );
};
