import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { about } from "../../portfolio.js";
// import aboutData from "../../shared/opensource/about.json";
import "./about.css";

class About extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="about-main">
        <Header theme={theme} />
        <div className="basic-about">
          <Fade bottom duration={2000} distance="40px">
            <div className="about-heading-div">
              <div className="about-heading-img-div">
                <img
											src={require(`../../assests/images/arnold-greeting.jpg`)}
											alt=""
										/>
              </div>
              <div className="about-heading-text-div">
                <h1
                  className="about-heading-text"
                  style={{ color: theme.text }}
                >
                  {about.title}
                </h1>
                <p
                  className="about-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {about.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default About;
