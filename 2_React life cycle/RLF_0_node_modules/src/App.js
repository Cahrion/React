// Icabi KIRGIZ / React
import React, { Component } from 'react' // import Component
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {

  state = { currentCategory: "", products: [] };

  componentDidMount(){  
    this.getProducts();
  };



  changeCategory = (category) => { 
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id); // when click start function
  };

  getProducts = (categoryId) => { 
    var url = 'http://localhost:3000/products';
    if(categoryId){ // do have categoryID
      url += '?categoryId=' + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };
  render() {
    let titleCategory = 'Category List';
    let productInfo = { title: 'Product List', dif: this.state.currentCategory };
    return (
      <div>
        <Container>
          <Row>
            <Navi title='Navi' />
          </Row>
          <Row>
            <Col xs='3'>
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} title={titleCategory} />
            </Col>
            <Col xs='9'>
              <ProductList info={productInfo} products={this.state.products}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}