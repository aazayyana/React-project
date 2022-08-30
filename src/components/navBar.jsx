import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul list-style-type='none'>
          <li>
            <Link to="/home"> Home</Link>
          </li>
          <li>
            <Link to="/products"> Products</Link>
          </li>
          <li>
            <Link to="/posts"> Posts</Link>
          </li>
          <li>
            <Link to="/admin/dashboard"> Admin</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
