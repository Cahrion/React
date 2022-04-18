import React, { Component } from 'react';
import { connect } from "react-redux";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, NavLink } from 'reactstrap';

class CartSummary extends Component {
    renderEmpty() {
        return (
            <NavItem>
                <NavLink>
                    Cart empty
                </NavLink>
            </NavItem>
        )
    }
    renderSummary() {
        return (
            <UncontrolledDropdown
                inNavbar
                nav
            >
                <DropdownToggle
                    caret
                    nav
                >
                    Cart
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem id={cartItem.product.id}>
                                {cartItem.product.productName} / {cartItem.quantity}
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}
export default connect(mapStateToProps)(CartSummary)