import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";

function App() {
  return (
    <div >
      <Container>
        <Navi />
        <DashBoard />
      </Container>
    </div>
  );
}

export default App;
