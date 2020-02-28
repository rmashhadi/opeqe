import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
export default function Sticky2() {
  const [x, setX] = useState("Looking for Some thing?");
  return (
    <div className="stick">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column"
        }}
      >
        <span style={{ color: "orange" }}> ASAP Pickup</span>
        <span style={{ color: "gray" }}>1008 Elden Way</span>
      </div>
      <b style={{ paddingLeft: "40px", marginRight: "20px" }}>Change</b>
      <b>Delivery</b>
      <b style={{ color: "gray", marginRight: "10px", marginLeft: "10px" }}>
        or
      </b>
      <b
        style={{
          paddingBottom: "5px",
          paddingTop: "5px",
          borderStyle: "solid",
          borderWidth: "0 0 1.3px 0"
        }}
      >
        Pickup
      </b>

      <input
        onFocus={() => setX("")}
        onBlur={() => setX("Looking for Some thing?")}
        placeholder={x}
      />
      <div className="search">
        <SearchIcon />
      </div>
    </div>
  );
}
