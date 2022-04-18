import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../redux/actions/productActions';
import * as cartActions from '../../redux/actions/cartActions';
import { Table, Badge, Button } from 'reactstrap';
import alertify from 'alertifyjs';

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts()
  };
  addToCart(product){
    this.props.actions.addToCart({quantity:1,product});
    alertify.success(product.productName + " add to cart");
  }
  render() {
    return (
      <div>
        <Badge color='warning'>
          Product List
        </Badge>
        <Badge color='success'>{this.props.currentCategory.categoryName}</Badge>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Category ID</th>
              <th>Category Name</th>
              <th>Units In Stock</th>
              <th>Cart</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.categoryId}</td>
                  <td>{product.productName}</td>
                  <td>{product.unitsInStock}</td>
                  <td><Button onClick={()=>this.addToCart(product)}>Add</Button></td>
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
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch)
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);