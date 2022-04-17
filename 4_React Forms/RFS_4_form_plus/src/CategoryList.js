// rcc
import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  componentDidMount() {
    this.props.getCategories();
  };
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ListGroup>
          {
            this.props.categories.map(category => (
              <ListGroupItem
                                              // Ternary function (?:) 
                active={category.categoryName===this.props.currentCategory?true:false}
                key={category.id}
                onClick={() => this.props.changeCategory(category)}
              >
                {category.categoryName}
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </div>
    )
  }
}
