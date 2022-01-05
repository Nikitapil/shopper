import React from "react";
import { useNavigate } from "react-router-dom";
import { Template } from "../Template/Template";
import "./error.scss";
export const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <Template
      content={
        <div className="container error-page__container">
          <h1 className="error-page__title">Page not found</h1>
          <button className="error-page__btn" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      }
    />
  );
};
