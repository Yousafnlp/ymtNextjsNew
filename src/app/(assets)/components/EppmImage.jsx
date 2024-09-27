import Image from "next/image";
import React from "react";

function EppmImage() {
  return (
    <Image
      src={JSON.parse(JSON.stringify(require("../assets/images/primary-images/eppm.webp")))}
      style={{
        width: "90%",
        maxWidth: "650px",
        height: "auto",
      }}
      alt="cover"
    />
  );
}

export default EppmImage;
