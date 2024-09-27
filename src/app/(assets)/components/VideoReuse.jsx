import React from "react";

function VideoReuse({ link }) {
  return (
    <div className="video-container">
      <iframe
        title="my life story"
        className="video"
        src={link}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoReuse;
