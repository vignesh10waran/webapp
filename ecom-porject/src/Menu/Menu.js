import React from "react";
import "./Menu.css";

const Menu = () => {
  let menucad = [
    {
      foodname: "Cappuccion",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
      rate: "$49",
    },
    {
      foodname: "Americano",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
      rate: "$49",
    },
    {
      foodname: "Macchiato",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
      rate: "$49",
    },
    {
      foodname: "Mocha",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
      rate: "$49",
    },
    {
      foodname: "Piccolo Latte",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
      rate: "$49",
    },
    {
      foodname: "Ristretto",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
      rate: "$49",
    },
  ];
  return (
    <div className="home-container">
      <div className="container">
        <div className="row">
          <div className="col-12 pt-5 d-flex justify-content-center menu-head">
            <h1>What kind of Foods we serve for you</h1>
          </div>
          <div className="col-12 pt-2 d-flex justify-content-center">
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 pt-5 main-menu">
            <button>All Menu</button>
            <button>Breakfast</button>
            <button>Lunch</button>
            <button className="but-4">Dinner</button>
            <button className="but-5">Budget Meal</button>
            <button className="but-6">Buffet</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 pt-5">
            <div className="menu-cad-head">
              {menucad.map((e) => {
                return (
                  <div className="mt-5 menu-cad-inner">
                    <h3>{e.foodname}</h3>
                    <p>{e.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
