// rcc
import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    counter: 1,
    categories: [{ categoryId: 1, categoryName: 'Beverages' }, { categoryId: 2, categoryName: 'Condiments' }],

    currentCategory: "" // new State
  };
  changeCategory = (category) => { // Arrow function

    // this.setState() = changes the state variable
    this.setState({ currentCategory: category.categoryName });
  };
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h5>{this.state.counter}</h5>
        <ListGroup>
          {
            this.state.categories.map(category => ( // call to changeCategory(category)
              <ListGroupItem key={category.categoryId} onClick={() => this.changeCategory(category)}>{category.categoryName}</ListGroupItem>
            ))
          }
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    )
  }
}
