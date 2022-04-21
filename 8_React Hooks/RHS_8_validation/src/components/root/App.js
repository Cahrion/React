import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import { Routes, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <div >
      <Container>
        <Navi />
        <Routes>
          <Route path="/" exact element={<DashBoard />} />
          <Route path="/product" element={<DashBoard />} />
          <Route path="/cart" element={<CartDetail />} />
          <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct />} />
          <Route path="/saveproduct" element={<AddOrUpdateProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
