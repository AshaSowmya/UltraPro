import React from "react";
import "../Styles/main.css";
import PlanEvent from "../Images/planEvent.png";
import PlanService from "../Images/planService.png";
import WeddingEvents from "./WeddingEvents";
function PlanEvents() {
  return (
    <div>
      <WeddingEvents />
      <div className="planevent-steps-container">
        <div className="plansteps-grid">
          <div className="planstep-card1">
            <div className="planstep-content1">
              <h2>WHAT DO YOU PLAN? WE WILL LEND YOU A HAND</h2>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <button className="button1">Get Started</button>
                <button className="button2">Learn More</button>
              </div>
            </div>
          </div>
          <div className="planstep-card2">
            <div className="planstep-content2">
              <img src={PlanEvent} alt="Plan Event" />
              <img src={PlanService} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlanEvents;
