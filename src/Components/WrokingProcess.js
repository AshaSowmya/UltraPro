import React from "react";
import "../Styles/main.css";
import Home from "./Home";

function WorkingProcess() {
    return (
      <div>
        <Home />
        <div className="event-steps-container">
        <div className="quize">HOW ITS WORK</div>
        <h2 className="title">Start Planning And Build The Event</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-content">
              <h2>Initial Consultation</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-content">
              <h2>Planning and Design</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-content">
              <h2>Execution and Management</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">04</div>
            <div className="step-content">
              <h2>Evaluation Events</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
        </div>
  );
}

export default WorkingProcess;