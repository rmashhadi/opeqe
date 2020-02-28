import React from "react";
export default function Product(props) {
  return (
    <div className="child">
      <div className={props.photo} />

      <span>{props.name}</span>
      <span>{props.type}</span>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <small>{props.time} </small>
          <small style={{ marginLeft: "2px", backgroundColor: "lightgray" }}>
            <b>${props.price}</b>
          </small>
        </div>
        <span style={{ color: "blue", backgroundColor: " rgb(196, 196, 243)" }}>
          Free Pickup
        </span>
      </div>
    </div>
  );
}
