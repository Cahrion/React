// Icabi KIRGIZ / React
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Container, Row, Col} from "reactstrap"; // let call the function

function App() {
  let titleCategory  = 'Category List' // use of variable state
  let productInfo   = {title:'Product List',dif:'Product Owner'} // For multiple variables
  return (
    <div> 
      <Container>
        <Row>
          <Navi title='Navi'/>  {/* standard use */}
        </Row>
        <Row>
          <Col xs='3'>
            <CategoryList title={titleCategory}/> {/* use of variable state */}
          </Col>
          <Col xs='9'>
            <ProductList info={productInfo}/> {/* For multiple variables */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;