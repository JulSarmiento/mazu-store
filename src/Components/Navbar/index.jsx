import React from "react";
import Logo from "../../assets/imgs/mazu-icon.svg";
import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

import "./index.css";

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

  // const userIcon = <i className="fas fa-user"/>

  return (

    <Navbar bg="light" expand="lg" className="header">

      <Container className="header__container">

        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="" className="header__logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <Nav.Link as={Link} to="/Categories" className="mx-3 my-auto links" >Store</Nav.Link>

            <CartWidget/>
            
          </Nav>    

        </Navbar.Collapse> 

      </Container>

    </Navbar>

  )
}