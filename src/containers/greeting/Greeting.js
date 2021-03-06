import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="button-greeting-div">
                <Button text="See my resume" newTab={true} href={greeting.resumeLink} theme={theme} />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="Me :)"
              src={require(`../../assests/images/arnold-greeting.jpg`)}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
