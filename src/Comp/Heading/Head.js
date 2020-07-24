import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Head.module.css";

function Header() {
  return (
    <div className={css.header}>
      <h3 className={css.fr}>Pro-Organiser</h3>
      <div className={css.float}>
        <NavLink exact to="/" activeClassName={css.highlight}>
          <div className={css.content}>Home</div>
        </NavLink>
        <NavLink exact to="/createboard" activeClassName={css.highlight}>
          <div className={css.content1}>Creact Board</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
