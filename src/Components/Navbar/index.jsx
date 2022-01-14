import React from "react";
import Logo from "../../assets/imgs/mazu-icon.svg";
import {Navbar, Container, NavDropdown, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

import "./index.css";
import HeaderDropdown from "../HeaderDropDown";
import CartWidget from "../CartWidget";
import "./index.css";

/**
 * 
 * This component manage the navbar components 
 * 
 * @param {string} 
 * 
 * @returns functional navbar
 */
export default function NavBar({title}) {

  const userIcon = <i class="fas fa-user"/>

  return (

    <Navbar bg="light" expand="lg" className="header">

      <Container className="header__container">

        <Navbar.Brand >
          <Link to="/"><img src={Logo} alt="" className="header__logo" /></Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <Link to="/Categories" className="mx-3 my-auto links "> Store  </Link>

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