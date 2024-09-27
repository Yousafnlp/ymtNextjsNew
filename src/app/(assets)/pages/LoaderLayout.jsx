import React from "react";
import Image from "next/image";
import "../styles/Navbar.css";
import "../styles/AllServicesSwiper.css";
function LoaderLayout() {
  return (
    <div className="my-home-c loader-bg-layout">
      <Image
    style={{width: '250px', height: 'auto', marginBottom: '30px'}}
        src={JSON.parse(JSON.stringify(require("../assets/images/primary-images/final logo ymt upload black.webp")))}
        alt="myimage"
      />
      <div className="loader"></div>
    </div>
  )
}

export default LoaderLayout