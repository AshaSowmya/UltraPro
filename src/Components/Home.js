import React from "react";
import '../Styles/main.css' 
import Navbar from './Navbar'
import '../Styles/home.css'
import Video from '../Images/bgVideo.mp4'
function Home() {

  return (
    <div className="home-container">
     <Navbar/>
   
     <video className="background-container" autoPlay loop muted>
        <source src={Video}  type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className="home-content">
        <h3>Best Events Organizer</h3>
        <h1>
          Unforgettable <br /> Events Organizing
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="services-btn">Our Services</button>
      </section>
    </div>
  );
}

export default Home;
