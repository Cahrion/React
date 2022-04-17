// Icabi KIRGIZ / React
import React, { Component } from 'react'
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Routes } from 'react-router-dom'; // import Route, Routes
import NotFound from './NotFound'; // import Not Found
import CartList from './CartList'; // import  Cart List
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';

export default class App extends Component {

  state = {
    currentCategory: "",
    products: [],
    cart: [],
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
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });

    // alertify
    alertify.success(product.productName + ' added to cart!', 2);
  };

  // remove cart item
  removeCartItem = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });

    // alertify
    alertify.success(product.productName + ' deleted from cart');
  };
  render() {
    let titleCategory = 'Category List';
    let productInfo = { title: 'Product List', dif: this.state.currentCategory };
    return (
      <div>
        <Container>
          <Navi title='Navi' cart={this.state.cart} removeCartItem={this.removeCartItem} />
          <Row>
            <Col xs='3'>
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} title={titleCategory} />
            </Col>
            <Col xs='9'>
              <Routes>
                <Route exact path='/' element={<ProductList
                  info={productInfo}
                  products={this.state.products}
                  addToCart={this.addToCart}
                />
                } />
                <Route exact path='/cart' element={<CartList
                  cart={this.state.cart}
                  removeCartItem={this.removeCartItem}
                />
                } />
                <Route path='form1' element={<FormDemo1/>}/>
                <Route path='form2' element={<FormDemo2/>}/>

                <Route path='*' element={<NotFound />} /> {/* 404 page build */}
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}