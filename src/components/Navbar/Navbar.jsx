import React from "react";
import styled from "styled-components";
// import "./Navbar.css";

// const Navbar = () => <nav className="app__navbar">Cactpot Solver(demo)</nav>;

const NavbarDisplay = styled.div`
  height: 5vh;
  padding: 0 16px;
  padding-top: 7px;
  padding-bottom: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-color: green; */
  /* border-radius: 5px; */
  background-color: grey;
`;
const NavbarStart = styled.div`
  width: 33%;
  background-color: yellow;
  height: 100%;
  /* padding */
`;
const Navbar = () => (
  <NavbarDisplay>
    <NavbarStart>logo?</NavbarStart>
    <NavbarStart>Simple Cactpot Solver</NavbarStart>
    <NavbarStart>About</NavbarStart>
  </NavbarDisplay>
);
export default Navbar;
