import React from "react";
import logo from "../Assets/Logo.png";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const path = useLocation().pathname;
  let navigate = useNavigate();
  return (
    <div className="navbar">
      <div
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
        className="navbarImage"
      >
        <img src={logo} alt="logo" />
        <p>| Bridge </p>
      </div>
      <div className="navbarContent">
        <p style={{ cursor: "pointer" }}>Docs</p>
        <p style={{ cursor: "pointer" }}>Github</p>
        {path === "/transfer" && (
          <div
            style={{
              border: "1px solid",

              borderColor:
                "linear-gradient(93.76deg, rgba(70, 77, 100, 0.458333) 3.86%, #6A3B72 42.46%, #2B4874 66.71%, #202844 96.4%)",

              borderRadius: "9px",
              margin: "0",
              marginRight: "10px",
              paddingLeft: "8px",
              height: "30px"
            }}
          >
            <p style={{ cursor: "pointer" }}>T1oi3u4oi23u4</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
