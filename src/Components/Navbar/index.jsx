import React from "react";
import Logo from "../../assets/imgs/mazu-icon.svg"
import {Navbar, Container, NavDropdown } from 'react-bootstrap';

//import CartWidget from "../CartWidget/index.jsx";

import "./index.css"
import HeaderLinks from '../HeaderLinks/Index'
import HeaderDropdown from "../HeaderDropDown";
import CartWidget from "../CartWidget";

import './index.css'

export default function NavBar({title}) {

  const userIcon = <i class="fas fa-user"></i>

  return (

    <Navbar bg="light" expand="lg" className="header">
      <Container className="header__container">
        <Navbar.Brand href="#home"><img src={Logo} alt="" className="header__logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <HeaderLinks/>
          <CartWidget/>
          <NavDropdown title={userIcon} id="basic-nav-dropdown" className="mx-3">
            <HeaderDropdown/>
          </NavDropdown>
        </Navbar.Collapse> 
      </Container>
    </Navbar>



  )
}