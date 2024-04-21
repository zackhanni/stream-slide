import React from "react";
import ImagePlayer from "../components/ImagePlayer";

export default function page() {
  return (
    <main>
      {/* add in overlay to adjust settings like transition speed, screen text, play/pause, next, previous, and END/goback. overlay should disapear when mouse stops moving */}
      <ImagePlayer />
    </main>
  );
}
