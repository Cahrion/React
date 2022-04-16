// Icabi KIRGIZ / React
import React, { Component } from 'react'
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Container, Row, Col} from "reactstrap"; 

export default class App extends Component { 

  state ={currentCategory: ""}; 

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };
  render(){
    let titleCategory  = 'Category List';
    let productInfo   = {title:'Product List',dif:this.state.currentCategory}; 
    return (
      <div> 
        <Container>
          <Row>
            <Navi title='Navi'/> 
          </Row>
          <Row>
            <Col xs='3'>
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} title={titleCategory}/>
            </Col>
            <Col xs='9'>
              <ProductList info={productInfo}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}