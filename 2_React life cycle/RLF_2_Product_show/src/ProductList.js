// rcc
import React, { Component } from 'react'
import { Table } from 'reactstrap' // get table

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h6>{this.props.info.dif}</h6>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Category Id</th>
              <th>Product Name</th>
              <th>Stock</th>
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
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    )
  }
}
