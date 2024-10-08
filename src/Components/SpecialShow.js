import React from "react";
import "../Styles/main.css";
import Image from "../Images/Group.jpeg";
import WorkingProcess from "./WrokingProcess";
function SpecialShow(){
    return(
<div>
    <WorkingProcess/>
    <div className="event-steps-container">
        <div className="special">SPECIAL SHOW</div>
        <h2 className="special-title">
          Charlie Putra <br></br>
          Love for Everyone
        </h2>
        <div className="special-display">
          <div className="content-wrapper">
            <p className="firstPara">
              At only 29 years old, Charlie Puth has proven to be one of
              industry’s most consistent hitmakers and sought-after
              collaborators. Puth has amassed eight multi-platinum singles, four
              GRAMMY nominations, two Billboard Music Awards.
            </p>
            <img src={Image} alt="Charlie Puth" />
            <p className="secondPara">
              Was RIAA certified gold only four days after its release and has
              logged five billion streams worldwide. In 2020, Puth’s
              collaboration with Gabby Barrett on their “I Hope” Remix earned
              him his fourth top 10 track on the Billboard Hot 100 and hit
              number one.
            </p>
          </div>
        </div>
      </div>
</div>
    )
}
export default SpecialShow