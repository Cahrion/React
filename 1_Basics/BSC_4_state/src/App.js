// Icabi KIRGIZ / React
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Container, Row, Col} from "reactstrap"; 

function App() {
  let titleCategory  = 'Category List' 
  let productInfo   = {title:'Product List',dif:'Product Owner'}
  return (
    <div> 
      <Container>
        <Row>
          <Navi title='Navi'/> 
        </Row>
        <Row>
          <Col xs='3'>
            <CategoryList title={titleCategory}/>  {/* State Architecture */}
          </Col>
          <Col xs='9'>
            <ProductList info={productInfo}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;