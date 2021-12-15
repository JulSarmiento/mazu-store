import React from "react";

import {Navbar, Container, NavDropdown } from 'react-bootstrap';

//import CartWidget from "../CartWidget/index.jsx";

import "./index.css"
import HeaderLinks from '../HeaderLinks/Index'
import HeaderDropdown from "../HeaderDropDown";

import './index.css'

export default function NavBar({title}) {
  return (

    <Navbar bg="light" expand="lg" className="header">
      <Container>
        <Navbar.Brand href="#home">Mazuzoe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <HeaderLinks/>
          <NavDropdown title="Usuario" id="basic-nav-dropdown">
            <HeaderDropdown/>
          </NavDropdown>
        </Navbar.Collapse> 
      </Container>
    </Navbar>



  )
}