import React from "react";
import "./user.css";

function UserExperience() {
  return (
    <div className="user__container">
      <div className="video-content">
        <video className="background-video" autoPlay muted loop>
          <source
            src="https://github.githubassets.com/images/modules/site/home/globe-500.h264.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h1>Welcome to My Website</h1>
        <p>Some content here...</p>
      </div>
    </div>
  );
}

export default UserExperience;
