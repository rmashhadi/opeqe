import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import logo from "../Pictures/logo.png";
export default function NavBar() {
  return (
    <div className="navbar">
      <img className="logo-container" src={logo} alt="logo" />

      <div className="top-menu-right">
        <span className="top-btn" className="top-btn">
          Reservation
        </span>
        <span className="top-btn">Orders</span>
        <span className="top-btn">Location</span>
        <small
          style={{
            color: "snow",
            paddingLeft: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
            height: "20px",
            width: "50px",
            backgroundColor: "black",
            borderRadius: "20px"
          }}
          className="top-btn"
        >
          Log In
        </small>
        <small
          style={{
            paddingLeft: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
            paddingRight: "2px",
            height: "20px",
            width: "50px",
            border: "solid black",
            borderRadius: "20px"
          }}
          className="top-btn"
        >
          Sign Up
        </small>
        <ShoppingBasketIcon
          style={{
            fontSize: "30px",
            position: "relative",
            top: "12px",
            color: "gray",
            position: "relative",
            top: "0"
          }}
        />
      </div>
    </div>
  );
}
