import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const cartProducts = useSelector(state => state.products.cart)
  
  const cartCounter = useMemo(() => {
    const counter = cartProducts.reduce((acc, item) => {
     return cartProducts.length ? acc+= item.count : 0
    }, 0)
    return counter
  }, [cartProducts])

  return (
    <header className="header">
      <div className="container header__container">
        <h1 className="header__logo">Shopper</h1>
        <nav className="header__nav">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "header__link header__link_active" : "header__link"
            }
          >
            Main
          </NavLink>
          <NavLink
            to={"/cart"}
            className={({ isActive }) =>
              isActive ? "header__link header__link_active" : "header__link"
            }
          >
            Cart
            {cartCounter > 0 && <div className="cart-label">{cartCounter}</div>}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
