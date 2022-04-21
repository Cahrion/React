import React, { Component } from 'react'
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText} from 'reactstrap';
import CartSummary from '../cart/CartSummary';
import {Link} from "react-router-dom";

export default class Navi extends Component {
  render() {
    return (
        <div>
        <Navbar
          color="light"
          expand="md"
          light
        >
          <NavbarBrand>
            <Link to="/">
              Cahrion Shop
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="https://github.com/Cahrion/React">
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummary/>
            </Nav>
            <NavbarText>
              Simple Text
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}