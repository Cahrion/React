// rcc
import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    return (
      <div>
          <h3>{this.props.info.title}</h3>
          <h6>{this.props.info.dif}</h6>
      </div>
    )
}
}
