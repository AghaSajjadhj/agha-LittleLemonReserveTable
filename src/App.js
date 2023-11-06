import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Main from "./components/main/Main";
import Form from "./components/form/Form";
import About from "./components/about/About";

import Bottom from "./components/bottom/Bottom";
import Login from "./components/loggin/Login";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import Order from "./components/order/Order";
import SubmitData from "./components/submitdata/SubmitData";

function App() {
  return (
    <>
      <Navbar />
      <Main />

      <Routes>
        <Route path="/" element={<main />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/form" element={<Form />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/submitdata" element={<SubmitData />} />
      </Routes>

      <Bottom />
    </>
  );
}

export default App;
