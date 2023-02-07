import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 home-img ">
            <img
              src={require("../asstes/foods8.jpg")}
              className="img-fluid"
            ></img>
          </div>
          <div className="col-md-6 home-head">
            <div>
              <p>WIDE OPTIONS OF CHOICE</p>
              <h1>Delicious Recipes</h1>
              <p>
                inappropriate behavior is often laughed off as “boys will be
                boys,” women face higher conduct standards especially in the
                workplace. That’s why it’s crucial that, as women.
              </p>
              <button className="home-button mt-3">CHECK OUR MENU</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
