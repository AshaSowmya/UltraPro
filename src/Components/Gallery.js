import React from "react";
import "../Styles/main.css";
import PlanEvents from "./PlanEvents";
import Image1 from "../Images/Image1.png";
import Image2 from "../Images/Image2.png";
import Image3 from "../Images/Image3.png";
import Image4 from "../Images/Image4.png";
import Image5 from "../Images/Image5.png";
import Image6 from "../Images/Image6.png";
import Image7 from "../Images/Image7.png";
import Image8 from "../Images/Image8.png";
import Image9 from "../Images/Image9.png";

function Gallery() {
  return (
    <div>
      <PlanEvents />
      <div className="event-steps-container">
        <div className="special">Events</div>
        <h2 className="special-title">Discover Gallery</h2>
      </div>
      <div className="gallery-container">
  <div className="gallery-item small"><img src={Image1} alt="Gallery 1" /></div>
  <div className="gallery-item"><img src={Image2} alt="Gallery 2" /></div>
  <div className="gallery-item small"><img src={Image3} alt="Gallery 3" /></div>
  <div className="gallery-item"><img src={Image4} alt="Gallery 4" /></div>
  <div className="gallery-item small"><img src={Image5} alt="Gallery 5" /></div>
  <div className="gallery-item"><img src={Image6} alt="Gallery 6" /></div>
  <div className="gallery-item small"><img src={Image7} alt="Gallery 7" /></div>
  <div className="gallery-item"><img src={Image8} alt="Gallery 8" /></div>
  <div className="gallery-item small"><img src={Image9} alt="Gallery 9" /></div>
</div>


    </div>
  );
}

export default Gallery;
