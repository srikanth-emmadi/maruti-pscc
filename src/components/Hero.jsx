import "./Hero.css";
import React from "react"; 
import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate(); 
  
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Maruti PSCC Poles Industries</h1>
        <p>Delivering strength and reliability for infrastructure projects.</p>
        <button className="hero-btn" onClick={() => navigate("/products")} >Explore Products</button>
      </div>
    </section>
  );
}
