// Icabi KIRGIZ / React
import React, { Component } from 'react'
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs"; // added alertifyjs

export default class App extends Component {

  state = { 
    currentCategory: "", 
    products: [],
    cart: [], // new One selected Product
};
  componentDidMount() {
    this.getProducts();
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    var url = 'http://localhost:3000/products';
    if (categoryId) {
      url += '?categoryId=' + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };
  
  // add to cart function
  addToCart = (product)=>{
    let newCart = this.state.cart;
    var addedItem = newCart.find(c=>c.product.id === product.id); // find to product ?? 

    if(addedItem){
      addedItem.quantity +=1;
    }else{
      newCart.push({product:product,quantity:1});
    }
    this.setState({cart: newCart});
    
    // alertify
    alertify.success(product.productName + ' added to cart!',2); 
  };

  // remove cart item
  removeCartItem = (product)=>{
      let newCart = this.state.cart.filter(c=>c.product.id !== product.id);
      this.setState({cart: newCart});

      // alertify
      alertify.success(product.productName + ' deleted from cart');
  };
  render() {
    let titleCategory = 'Category List';
    let productInfo = { title: 'Product List', dif: this.state.currentCategory };
    return (
      <div>
        <Container>
          <Navi title='Navi' cart={this.state.cart} removeCartItem={this.removeCartItem}/>
          <Row>
            <Col xs='3'>
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} title={titleCategory} />
            </Col>
            <Col xs='9'>
              <ProductList info={productInfo} products={this.state.products} addToCart={this.addToCart}/> 
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}