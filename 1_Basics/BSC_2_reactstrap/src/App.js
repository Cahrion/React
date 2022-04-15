// Icabi KIRGIZ / React
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Container, Row, Col} from "reactstrap"; // let call the function

function App() {
  return (
    <div> 
      <Container>
        <Row>
          <Navi/>
        </Row>
        <Row>
          <Col xs='3'> {/* xs=3 => col-3 */}
            <CategoryList/>
          </Col>
          <Col xs='9'> {/* xs=9 => col-9 */}
            <ProductList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;