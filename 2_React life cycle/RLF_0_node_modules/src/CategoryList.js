// rcc
import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: []
  };
  componentDidMount(){ 
    this.getCategories();
  };
  getCategories = ()=>{
    fetch('http://localhost:3000/categories') 
    .then(response=>response.json())
    .then(data=>this.setState({categories:data}));
  };

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h5>{this.state.counter}</h5>
        <ListGroup>
          {
            this.state.categories.map(category => ( // call to changeCategory(category)
              <ListGroupItem key={category.id} onClick={() => this.props.changeCategory(category)}>{category.categoryName}</ListGroupItem>
            ))
          }
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    )
  }
}
