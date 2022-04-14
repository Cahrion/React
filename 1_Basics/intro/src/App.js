// Icabi KIRGIZ / React
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

function App() {
  return (
    // React = Component Architecture
    <div>
      {/* Components */}
      <Navi></Navi>
      <CategoryList></CategoryList>
      <ProductList></ProductList>
      <Navi></Navi>

      <hr></hr>

      {/* Public */}
      <h3>Hello From React</h3>
      <h2>Hi !</h2>
    </div>
    // <h2>Hi !</h2> it not working because it needs container tag (div)
  );
}

export default App;