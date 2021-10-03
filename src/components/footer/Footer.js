import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { credit, greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          {/* with <span role="img">❤️</span>  */}
          
          Made by {greeting.title}, Template by{" "} 
          <a href={credit.url} target="_" class="button">
            {credit.github}
          </a>
        </p>
      </Fade>
    </div>
  );
}
