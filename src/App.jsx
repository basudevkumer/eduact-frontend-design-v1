import React from "react";
import Rootlayout from "./rootlayout/Rootlayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import ContactPg from "./page/ContactPg";
import BlogPG from "./page/BlogPG";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPg />} />
          <Route path="/blog" element={<BlogPG />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
