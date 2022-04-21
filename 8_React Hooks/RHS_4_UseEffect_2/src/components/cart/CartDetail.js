import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import * as cartActions from '../../redux/actions/cartActions';
import { Table, Button } from "reactstrap";
import alertify from 'alertifyjs';

class CartDetail extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.success("Deleted from cart");
    };
    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Category ID</th>
                            <th>Category Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cart.map(cartItem => (
                                <tr key={cartItem.product.id}>
                                    <td>{cartItem.product.id}</td>
                                    <td>{cartItem.product.categoryId}</td>
                                    <td>{cartItem.product.productName}</td>
                                    <td>{cartItem.product.unitPrice}</td>
                                    <td>{cartItem.quantity}</td>
                                    <td><Button onClick={() => this.removeFromCart(cartItem.product)}>Delete</Button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
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
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)