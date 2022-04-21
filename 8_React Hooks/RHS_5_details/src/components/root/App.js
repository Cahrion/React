import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import { Routes, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

function App() {
  return (
    <div >
      <Container>
        <Navi />
        <Routes>
          <Route path="/" exact element={<DashBoard />} />
          <Route path="/product" exact element={<DashBoard />} />
          <Route path="/cart" exact element={<CartDetail />} />
          <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
