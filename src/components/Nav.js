import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavOut = styled.div`
  border: 3px solid black;
  ul {
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    li {
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff73;
      font-size: 16px;
    }
  }
`;

function Nav() {
  return (
    <NavOut>
      <ul>
        <li>
          <NavLink exact to="/">
            Introduce
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/">
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/">
            Project
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/">
            Contact
          </NavLink>
        </li>
      </ul>
    </NavOut>
  );
}

export default Nav;
