import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <>
      <Header />
      {/* Outlet : Display the nested child components in b/n header and footer; component imported from react-router-dom version 6  */}
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;

//  fragment <> replacing the default div coz we don't want the default div property to interfere with our application
