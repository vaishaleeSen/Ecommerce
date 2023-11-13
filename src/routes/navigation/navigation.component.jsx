import "./navigation.styles.scss";
import React from "react";

import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
function Navigation() {
  return (
    <>
      <div className="navBar">
        <div className="sectionOne">
          <Link className="navLinks" to="allProds">
            <h2 className="logo">eCommerce</h2>
          </Link>
          <Link className="navLinks" to="allProds">
            Products
          </Link>
          <Link className="navLinks" to="addProd">
            Add Product
          </Link>
        </div>

        <div className="sectionTwo">
          <Link className="navLinks" to="cart">
            <CartIcon />
          </Link>

          <div className="navItem">
            <img
              className="avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcov6U4FjTl0ok0LIXeU141fZw2MgDn20Ej0SheC6LQ&s"
              alt=""
            />
            <p className="name">Vaishalee</p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
