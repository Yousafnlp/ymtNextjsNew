import React from "react";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

function Header() {
  return (
    <>
      <NavbarMobile />
      <Navbar />
    </>
  );
}

export default Header;
