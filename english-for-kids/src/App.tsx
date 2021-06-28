import React, { useEffect, useState } from "react";
import Sidebar from './components/sidebar/sidebar';
import Footer from "./components/footer/footer";

export default function App():JSX.Element {
  return (
    <div className="container">
      <h1>English for kids</h1>
      <Sidebar />
      <Footer />
    </div>
  );
}