import React, { useEffect, useState } from "react";
import SideMenu from './components/menu/menu';
import Footer from "./components/footer/footer";

export default function App():JSX.Element {
  return (
    <div className="container">
      <h1>English for kids</h1>
      <SideMenu />
      <Footer />
    </div>
  );
}