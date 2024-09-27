import React from "react";
import Header from "./(assets)/components/Header";
import Footer from "./(assets)/components/Footer";
import '../app/(assets)/styles/Navbar.css'
import '../app/(assets)/styles/Sessions.css'
function Main({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Main;
