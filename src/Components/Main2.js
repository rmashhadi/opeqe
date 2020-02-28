import React from "react";
import NavBar from "./NavBar";
import Sticky2 from "./Sticky2";
import Special from "./Special";
import logo from "../Pictures/logo.png";
import logo2 from "../Pictures/logo2.png";
import MyCarousel from "./MyCarousel";
import Button from "./Button";
export default function Main2() {
  return (
    <>
      <NavBar />
      <div className="mid">
        <MyCarousel />
      </div>

      <div className="h1-con">
        <Sticky2 />
        <Special
          MainTitle="Salad"
          ProductList={[
            {
              price: "20.5",
              time: "7-10 Mins",
              photo: "salad1",
              name: "Roasted Chicken Salad",
              type: "Salad. American. Apetizer"
            },
            {
              price: "14.5",
              time: "7-10 Mins",
              photo: "salad2",
              name: "Kale Salad",
              type: "Salad. American. Apetizer"
            },
            {
              price: "14.5",
              time: "7-10 Mins",
              photo: "salad3",
              name: "Greek Salad",
              type: "Salad. American. Apetizer"
            },
            {
              price: "6.00",
              time: "30-37 Mins",
              photo: "salad4",
              name: "Ceaser Salad",
              type: "Salad. American. Apetizer"
            },
            {
              price: "14.5",
              time: "2-20 Mins",
              photo: "salad5",
              name: "California Chicken Salad",
              type: "Salad. American. Apetizer"
            },
            {
              price: "14.5",
              time: "1-10 Mins",
              photo: "salad6",
              name: "Chopped Salad",
              type: "Salad. American. Apetizer"
            }
          ]}
        />

        <Special
          MainTitle="American"
          ProductList={[
            {
              price: "20.5",
              time: "7-10 Mins",
              photo: "American1",
              name: "Chicken Soup",
              type: "Soupe. American. Apetizer"
            },
            {
              price: "14.5",
              time: "7-10 Mins",
              photo: "American2",
              name: "Creamy Chicken Soup",
              type: "Soupe. American. Apetizer"
            },
            {
              price: "14.5",
              time: "7-10 Mins",
              photo: "American3",
              name: "Egg burger",
              type: "Sandwich. American. Apetizer"
            },
            {
              price: "6.00",
              time: "30-37 Mins",
              photo: "American4",
              name: "Ceaser Salad",
              type: "Salad. American. Apetizer"
            },
            {
              price: "14.5",
              time: "2-20 Mins",
              photo: "American5",
              name: "California Chicken Salad",
              type: "Salad. American. Apetizer"
            },
            {
              price: "14.5",
              time: "1-10 Mins",
              photo: "American6",
              name: "Chopped Salad",
              type: "Salad. American. Apetizer"
            }
          ]}
        />
        <div className="gift">
          <div className="cards">
            <div className="card1"></div>
            <div className="card2"></div>
            <div className="card3"></div>
          </div>
          <div className="gift-txt">
            <b style={{ alignSelf: "center", color: "brown" }}>
              Branded Gift Card
            </b>
            <img className="logo" src={logo} />
            <span>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </span>
            <div className="btn-container">
              <Button />
            </div>
          </div>
        </div>
        <div className="footer">
          <div style={{ alignItems: "center" }} className="cols">
            <small>Powered By</small>
            <img src={logo2} style={{ width: "150px" }} alt="logo" />
          </div>
          <div className="cols">
            <span className="big">Main Menu</span>
            <span className="gray">Pickup</span>
          </div>{" "}
          <div className="cols">
            <span className="big">Orders</span>
            <span className="gray">Upcoming Orders</span>
            <span className="gray">Recent Orders</span>
          </div>
          <div className="cols">
            <span className="big">Reservation</span>
            <span className="gray">Recent Reservation</span>
            <span className="gray">Wait To Be Seated</span>
          </div>
          <div className="cols">
            <span className="big">Profile</span>
            <span className="gray">Promos and Credits</span>
            <span className="gray">Rewards</span>
          </div>
          <div className="cols">
            <span className="big">Special Offers</span>
            <span className="gray">Chief Special</span>
            <span className="gray">code FREEDINE</span>
            <span className="gray">Breakfast Special</span>
          </div>
        </div>
      </div>
    </>
  );
}
