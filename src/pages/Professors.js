import React from "react";
import { Link } from "react-router-dom";
import photo_pro1 from "../assets/prof_gang.jpeg";
import photo_pro2 from "../assets/prof_leehg.jpeg";
import photo_pro3 from "../assets/prof_lee.jpeg";
import photo_pro4 from "../assets/prof_eum.jpeg";
import photo_pro5 from "../assets/prof_ryu.png";
import "./css/Professors.css"; // CSS 파일 추가

function Professors() {
  return (
    <section id="professors" className="section">
      <h2>Professors</h2>
      <div className="photo-gallery_pro">
        <Link to="/professor1">
          <img src={photo_pro1} alt="Professor 1" className="photo_pro" />
        </Link>
        <Link to="/professor4">
          <img src={photo_pro4} alt="Professor 4" className="photo_pro" />
        </Link>
        <Link to="/professor2">
          <img src={photo_pro2} alt="Professor 2" className="photo_pro" />
        </Link>
        <Link to="/professor3">
          <img src={photo_pro3} alt="Professor 3" className="photo_pro" />
        </Link>
        <Link to="/professor5">
          <img src={photo_pro5} alt="Professor 5" className="photo_pro" />
        </Link>
      </div>
    </section>
  );
}

export default Professors;
