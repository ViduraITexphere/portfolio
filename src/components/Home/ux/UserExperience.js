import React from "react";

function UserExperience() {
  return (
    <div style={{ width: "100%" }}>
      <video
        src="/animation.mp4"
        autoPlay
        loop
        muted
        controlsList="nodownload"
        type="video/mp4"
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default UserExperience;
