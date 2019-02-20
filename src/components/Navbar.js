import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
        </ul>
        <Link to="/cart" className=" ml-auto text-white nav-link">
          <span className="mr-2">
            <i className="fas fa-cart-plus" />
          </span>
          My Cart
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainSpice) !important;
  overflow: hidden;
  transition: 0.4s; /* Adds a transition effect when the padding is decreased */
  position: fixed; /* Sticky/fixed navbar */
  width: 100%;
  top: 0; /* At the top */
  z-index: 99;
  .nav-link {
    color: white !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
