import React, { Component } from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as cartActions from '../../redux/actions/cartActions';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, NavLink, Badge} from 'reactstrap';
import alertify from 'alertifyjs';

class CartSummary extends Component {
    removeFromCart(product){
        this.props.actions.removeFromCart(product);
        alertify.success("Deleted from cart");
    };
    renderEmpty() {
        return (
            <NavItem>
                <NavLink>
                    Cart empty
                </NavLink>
            </NavItem>
        )
    };
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
                            <DropdownItem key={cartItem.product.id}>
                                <Badge color="danger" onClick={()=>this.removeFromCart(cartItem.product)}>X</Badge> | {cartItem.product.productName} / {cartItem.quantity}
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem>
                        My Cart
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
function mapDispatchToProps(dispatch) {
  return {
    actions: {
        removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)