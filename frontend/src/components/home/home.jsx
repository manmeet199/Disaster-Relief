import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./home.css";
import Image from "react-image-resizer";
import cur from "../assets/download.jpg";
import cur1 from "../assets/images.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <p>We are Here To help You</p>
          <h3>
            Helping people in disaster is motive of our team. So many people die
            in time of disasters and calamity not because disasters strike them
            particularly but because of loss of connection. If you stuck
            somewhere in case of disaster You can contact our website by
            registring yourself.we will send you data to the goverment officials
            and volentier so that they can help you.You can also register any
            missing person you know we will circulate the data about missing
            person give by you.
          </h3>
          <button className="home-register-button">
            <NavLink to="/register" className="home-register-button-navlink">
              Register
            </NavLink>
          </button>
        </div>
        <div className="home-image">
          <img
            src={require("../../assets/images/homePage.png").default}
            alt=""
          />
        </div>
      </div>
      <div className="image-container">
        <Image
          img
          src={cur}
          alt="cur"
          class="center"
          height={350}
          width={700}
        />
        <Image
          img
          src={cur1}
          alt="cur"
          class="center"
          height={350}
          width={700}
        />
      </div>
    </div>
  );
};

export default Home;
