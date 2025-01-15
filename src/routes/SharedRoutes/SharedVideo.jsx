import React from "react";
import { Outlet } from "react-router-dom";

import AppleYouTubeVideos from "../../api/YouTubeAPIforApple/AppleYouTubeVideos";

function SharedVideo() {
  return (
    <div>
      <Outlet />
      <AppleYouTubeVideos />
    </div>
  );
}

export default SharedVideo;
