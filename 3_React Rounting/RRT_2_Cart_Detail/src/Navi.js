import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import CartSummary from './CartSummary';

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Link to='/'> {/* react router dom -> Link */}
              {this.props.title}
            </Link>
            </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>Cahrion</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Cahrion/React">GitHub</NavLink>
              </NavItem>
              <CartSummary cart={this.props.cart} removeCartItem={this.props.removeCartItem}/> {/* Component Drilling */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}