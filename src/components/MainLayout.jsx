import React from "react";
import { getAuth } from "../utils/helpers";
import FloatingCartButton from "./FloatingCartButton";
import Header from "./Header";
import Slider from "./Slider";

function MainLayout({ children, slider }) {
  let loginNow = getAuth();
  return (
    <>
      <Header />
      {slider ? <Slider /> : null}
      {/* <Slider /> */}
      {children}
      {loginNow ? <FloatingCartButton /> : null}
      {/* <FloatingCartButton /> */}
    </>
  );
}

export default MainLayout;
