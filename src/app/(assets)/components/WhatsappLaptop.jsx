"use client"
import React from "react";
import Image from "next/image";
import '../styles/Main.css'
import '../styles/ImgAnimation.css'

const WhatsappLaptop = () => {
  const phoneNumber = "03370411579";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button className="wa-btn  image-class2 p-0 displayed-laptop">
      <Image
        src={JSON.parse(JSON.stringify(require("../assets/images/primary-images/whatsappicon.webp")))}
        style={{width: '65px', height: 'auto'}}
        onClick={openWhatsApp}
        alt="contact me"
      />
    </button>
  );
};

export default WhatsappLaptop;
