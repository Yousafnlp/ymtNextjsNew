import React, { Suspense } from 'react';
import LoaderDark from '../pages/LoaderDark';
const VideoReuse = React.lazy(() => import("./VideoReuse"));

const videos = [
  "https://www.youtube.com/embed/G_V4AOvbUUg",
  "https://www.youtube.com/embed/ToplB3hYU98",
  "https://www.youtube.com/embed/6-hAWvNSR0M",
  "https://www.youtube.com/embed/aiB0I-WdhGA",
  "https://www.youtube.com/embed/9GNAG35wM70",
  "https://www.youtube.com/embed/W0OFGJOGkq0",
  "https://www.youtube.com/embed/oS5_3LOoq84",
  "https://www.youtube.com/embed/N9UPuc12FLI"
];

function VideoGallery() {
  return (
    <div className="mt-5">
      <div className="row gap-sm-4 gap-4 gap-lg-0 gap-md-0 d-flex justify-content-center px-3 pb-5 px-lg-5 px-md-5 align-items-center">
        {videos.map((videoUrl, index) => (
          <div key={index} className="p-0 p-sm-0 p-lg-3 p-md-2 col-12 col-md-6 co-sm-12 col-lg-4">
             <Suspense fallback={<LoaderDark/>}>
              <VideoReuse link={videoUrl}/>
              </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoGallery;
