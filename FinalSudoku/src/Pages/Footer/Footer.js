import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import "./Footer.css";
import facebook from "../../images/facebook.png";
import youtube from "../../images/youtube.png";
import instagram from "../../images/instagram.png";
import ios from "../../images/ios.svg";
import playstore from "../../images/playstore.png";
import fssai from "../../images/fssai.svg";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer" style={{ overflowX: "hidden" }}>
      <br />
      <div className="row linkRow">
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <br />

      <br />

      <br />
      <div>
        <h6 className="info">
          © 2022 Indian Gaming . All rights reserved. License Number:
          45781256894512
        </h6>
      </div>
      <br />
      <div style={{ marginLeft: "45%", marginBottom: "2%" }}></div>
      {/* <br /> */}
    </div>
  );
}
