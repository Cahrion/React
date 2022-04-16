// rcc
import React, { Component } from 'react'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge
} from 'reactstrap';
export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu end>
          {
            this.props.cart.map(cart => (
              <DropdownItem key={cart.product.id}>
                <Badge onClick={()=>this.props.removeCartItem(cart.product)} color='danger'>X</Badge> / {cart.product.productName} / {cart.quantity}
              </DropdownItem>
            ))
          }
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmptyCart(){
    return(
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }
  render() {
    return (
      <div>
        {/* Ternary Function (?:) */}
        {this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}
      </div>
    )
  }
}
