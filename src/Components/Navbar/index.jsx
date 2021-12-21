import React from "react";
import Logo from "../../assets/imgs/mazu-icon.svg"
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';

//import CartWidget from "../CartWidget/index.jsx";

import "./index.css"
import HeaderDropdown from "../HeaderDropDown";
import CartWidget from "../CartWidget";

import './index.css'

export default function NavBar({title}) {

  const userIcon = <i class="fas fa-user"/>

  return (

    <Navbar bg="light" expand="lg" className="header">

      <Container className="header__container">

        <Navbar.Brand href="/"><img src={Logo} alt="" className="header__logo" /></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <Nav.Link href="/Products" className="mx-3"> Store </Nav.Link>

            <Nav.Link href="/Categories" className="mx-3"> Categories (testing) </Nav.Link>

            <CartWidget/>
            
            <NavDropdown title={userIcon} id="basic-nav-dropdown" className="mx-3">
              <HeaderDropdown/>
            </NavDropdown>

          </Nav>    

        </Navbar.Collapse> 

      </Container>

    </Navbar>

  )
}