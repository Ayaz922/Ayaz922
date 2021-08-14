import React from "react";
import SocialContact from "../../common/social-contact/SocialContact";
// import SocialContact from "../../common/social-contact";
import "./about.css";
function Abouts() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">a Full Stack Engineer</span>.<br /> I love developing
         Mobile and Web applications
        </div>
        <div className="about-photo">
          <img
             src='https://ashisharya.netlify.app/static/media/devgif-unscreen.e9c27f7a.gif'
            className="picture"
          />
        </div>
      </div>
      <SocialContact/>
    </div>
  );
}
export default Abouts;
