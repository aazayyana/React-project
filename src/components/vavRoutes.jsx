import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./navBar";
import Dashboard from "./admin/dashboard";
import Products from "./products";
import Posts from "./posts";
import Home from "./home";

const NavRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products orderBy='newest'/>} />
          <Route path="posts" element={<Posts />} />
          <Route path="admin/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default NavRoutes;
