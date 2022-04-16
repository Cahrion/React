// Icabi KIRGIZ / React
import React, { Component } from 'react' // import Component
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Container, Row, Col} from "reactstrap"; 

export default class App extends Component { // converted to class

  state ={currentCategory: ""}; // we brought the "state"

  changeCategory = (category) => {  // we brought the "changeCategory"
    this.setState({ currentCategory: category.categoryName });
  };
  render(){
    let titleCategory  = 'Category List';
    let productInfo   = {title:'Product List',dif:this.state.currentCategory}; // we change dif = this.state.currentCategory
    return (
      <div> 
        <Container>
          <Row>
            <Navi title='Navi'/> 
          </Row>
          <Row>
            <Col xs='3'>
              {/* we sent the "changeCategory" and "currentCategory"*/}
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