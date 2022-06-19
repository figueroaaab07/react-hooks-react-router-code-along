import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "60px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const activeStyle = {
  display: "inline-block",
  width: "60px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "darkblue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? activeStyle : linkStyles
      }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) =>
          isActive ? activeStyle : linkStyles
      }
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) =>
          isActive ? activeStyle : linkStyles
      }
      >
        Login
      </NavLink>
      <NavLink
        to="/signup"
        style={({ isActive }) =>
          isActive ? activeStyle : linkStyles
      }
      >
        Signup
      </NavLink>
      <NavLink
        to="/messages"
        style={({ isActive }) =>
          isActive ? activeStyle : linkStyles
      }
      >
        Messages
      </NavLink>
    </div>
  );
}

export default NavBar;