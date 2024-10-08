import React from "react";
import "../Styles/main.css";
import WeddingEvent from "../Images/weddingEvent.png";
import SpecialShow from "./SpecialShow";

function WeddingEvents() {
  return (
    <div>
      <SpecialShow />
      <div className="weddingevent-steps-container">
        <div className="weddingevent-text">
          <h1>20% OFF Wedding Events For Limited Sale</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>CLAIM DISCOUNT</button>
        </div>
        <div className="weddingevent-image">
          <img src={WeddingEvent} alt="Wedding Event" />
        </div>
      </div>
    </div>
  );
}
export default WeddingEvents;
