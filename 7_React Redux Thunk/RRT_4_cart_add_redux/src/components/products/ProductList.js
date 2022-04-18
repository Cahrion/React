import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../redux/actions/productActions';
import { Table, Badge} from 'reactstrap';

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts()
  };
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
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map(product=>(
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.categoryId}</td>
                  <td>{product.productName}</td>
                  <td>{product.unitsInStock}</td>
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
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);