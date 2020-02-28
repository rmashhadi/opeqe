import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
const photos = [
  {
    name: "Breakfast Special",
    description:
      "Get 15% off when you order 3 or more Blueberry Pancake Breakfast",
    btn: "Cheif Special"
  },
  {
    name: "Chief Special",
    description: "Get 10% off when you order more than 20",
    btn: "code FREEDINE"
  }
];
export default class MyCarousel extends React.Component {
  render() {
    var settings = {
      className: "",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplaySpeed: 4000,
      cssEase: "linear",
      autoplay: true,
      adaptiveHeight: true,
      arrows: false,
      appendDots: dots => (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "40px" }}> {dots} </ul>
        </div>
      )
    };
    return (
      <div className="App">
        <Slider {...settings}>
          {photos.map(item => {
            return (
              <div>
                <div className="carousel-photo">
                  <div>
                    <p>
                      {" "}
                      <b style={{ fontSize: "30px" }}>{item.name}</b>
                    </p>

                    <p style={{ fontSize: "20px" }}>{item.description}</p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "black",
                      padding: "10px",
                      borderRadius: "20px",
                      marginBottom: "20px"
                    }}
                  >
                    <span style={{ color: "snow" }}>Use</span>{" "}
                    <span style={{ backgroundColor: "lightblue" }}>
                      {item.btn}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
