import React from "react";
//import "./STYLES.css";
//import useHook from "./useHook.js";
import { NavLink } from "react-router-dom";
import "./Header.css";

const activeStyle = {
  color: "#3498db"
};

const Header = React.memo(props => {
  const { title } = props;
  return (
    <header>
      <h1>{title}</h1>
      <NavLink exact activeStyle={activeStyle} to="/">
        Overview
      </NavLink>
      <NavLink exact activeStyle={activeStyle} to="/campaigns">
        Campaigns
      </NavLink>
      <NavLink exact activeStyle={activeStyle} to="/create">
        Create
      </NavLink>
    </header>
  );
});

export default Header;
