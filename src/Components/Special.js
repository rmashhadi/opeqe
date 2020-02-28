import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Product from "./Product";

export default function Special(props) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const handleNext = () => {
    setCount(count + 1);
    console.log("c", count);
  };
  const handlePrev = () => {
    setCount(count - 1);
    console.log("c", count);
  };

  useEffect(() => {
    console.log("counter", count);
  }, [count]);
  var name = "special" + count.toString();
  var myScroller = "scroller" + count.toString();
  return (
    <>
      <div
        style={{
          width: "83.5vw",
          margin: "auto",
          marginBottom: "20px",
          border: "solid lightgray",
          borderWidth: "0px 0px 1px 0px",
          paddingTop: "50px",
          paddingBottom: "15px"
        }}
      >
        <span style={{ fontSize: "23px" }}>
          <b>{props.MainTitle}</b>
        </span>
      </div>
      <p className={myScroller}></p>
      <div
        onMouseLeave={() => setShow(false)}
        onMouseEnter={() => setShow(true)}
        className="container-s"
      >
        <div className={name}>
          {props.ProductList.map((ProductList, index) => {
            return (
              <Product
                key={index}
                photo={ProductList.photo}
                name={ProductList.name}
                type={ProductList.type}
                time={ProductList.time}
                price={ProductList.price}
              />
            );
          })}
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            opacity: show ? 1 : 0
          }}
        >
          <button
            style={{ opacity: 0 < count ? 1 : 0 }}
            className="prev"
            onClick={() => handlePrev()}
          >
            <ArrowBackIosIcon
              style={{ position: "relative", left: "4px", top: "2px" }}
            />
          </button>

          <button
            style={{
              opacity: count < 2 ? 1 : 0
            }}
            className="next"
            onClick={() => handleNext()}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </>
  );
}
