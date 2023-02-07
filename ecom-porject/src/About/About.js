import React from "react";
import "./About.css";

const About = () => {
  let image = [
    {
      source: "./foods4.jpg",
      title: "hi",
    },
    {
      source: "./foods.jpg",
      title: "hi",
    },
    {
      source: "./foods13.jpg",
      title: "hi",
    },
  ];
  return (
    <div className="home-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12 about-head">
            <h1 class="d-flex justify-content-center pt-5 pb-4">
              About Our Story
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label className="about-para">
              <p className="about-para-inner">
                Who are in extremely love with eco friendly system. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 pt-5  cls">
            {image.map((e, i) => {
              return (
                <div className="mb-5 about-img">
                  <div>
                    <img src={e.source} className="img-inner"></img>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
