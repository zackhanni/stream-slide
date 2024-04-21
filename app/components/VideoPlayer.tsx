import React from "react";

export default function VideoPlayer() {
  let currentVideo = "/video/21368-317182818_medium.mp4";

  return (
    <video
      width="1920"
      height="1080"
      controls
      autoPlay
      loop
      //   muted
      preload="auto"
    >
      <source src={currentVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
