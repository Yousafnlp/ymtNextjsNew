import React from "react";
import Image from "next/image";
import "../styles/CclientsLogos.css";
import "../styles/Main.css";
 

const clients = [
  require("../assets/images/clientsLogo/gcu-min.webp"),
  require("../assets/images/clientsLogo/uet.webp"),
  require("../assets/images/clientsLogo/cf-logo.webp"),
  require("../assets/images/clientsLogo/bic.webp"),
];

function CclientsLogosLaptop() {
  return (
    <>
      <div
        style={{ marginTop: "1rem", marginBottom: '3.5rem'}}
        className="custom-container  px-3 px-lg-5 px-md-5  flex-column  displayed-laptop "
      >
        <div className="d-flex flex-wrap justify-content-center align-items-center mt-5 logosGap">
          {clients.map((imagePath, index) => (
            <div className="clients-logo-box" key={index}>
              <Image style={{width: '100px', height: 'auto'}} src={JSON.parse(JSON.stringify(imagePath))} alt="logo" />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center align-items-center logosGap">
          <div className=" clients-logo-box">
            <Image style={{width: '100px', height: 'auto'}} 
              src={JSON.parse(JSON.stringify(require("../assets/images/clientsLogo/pitb.webp")))}
              alt="myimage"
            />
          </div>
          <div className=" clients-logo-box">
            <Image style={{width: '100px', height: 'auto'}} 
              src={JSON.parse(JSON.stringify(require("../assets/images/clientsLogo/plan9.webp")))}
              alt="myimage"
            />
          </div>
          <div className=" clients-logo-box">
            <Image 
              style={{ width: "50px", height: 'auto' }}
              src={JSON.parse(JSON.stringify(require("../assets/images/clientsLogo/logogcu.webp")))}
              alt="myimage"
            />
          </div>
        </div>

      </div>
    </>
  );
}

export default CclientsLogosLaptop;
