import React from "react";
import Image from "next/image";
import "../styles/CclientsLogos.css";
 

const clients = [
  require("../assets/images/clientsLogo/gcu-min.webp"),
  require("../assets/images/clientsLogo/uet.webp"),
  require("../assets/images/clientsLogo/cf-logo.webp"),
  require("../assets/images/clientsLogo/bic.webp"),
  require("../assets/images/clientsLogo/pitb.webp"),
  require("../assets/images/clientsLogo/plan9.webp"),
];

function CclientsLogosMobile() {
  return (
    <>
      <div
        style={{ marginTop: "1rem", marginBottom: '3rem' }}
        className=" px-3 px-lg-5 px-md-5  custom-container  displayed-phone"
      >
        <div className="d-flex flex-wrap justify-content-center align-items-center mt-5 logosGap">
          {clients.map((imagePath, index) => (
            <div className="clients-logo-box" key={index}>
              <Image  style={{width: '80px', height: 'auto'}} src={JSON.parse(JSON.stringify(imagePath))} alt="logo" />
            </div>
          ))}
          <div className=" clients-logo-box">
            <Image
              style={{ width: "40px", height:'40px' }}
              src={JSON.parse(JSON.stringify(require("../assets/images/clientsLogo/logogcu.webp")))}
              alt="myimage"
            />
          </div>
        </div>

      </div>
    </>
  );
}

export default CclientsLogosMobile;
