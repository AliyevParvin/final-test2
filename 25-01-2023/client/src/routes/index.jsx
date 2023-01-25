import React from "react";
import { Routes, Route } from "react-router-dom";
import AddCourse from "../pages/add-Course";
import HomePage from "../pages/home";
const RoutesOfPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/add-course" element={<AddCourse/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/add-product" />
        <Route path="/add-product" />

      </Routes>
    </div>
  );
};

export default RoutesOfPages;
