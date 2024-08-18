import "./assest/css/indexx.css";
import restaurant_image from "./assest/media/OIP.jpg";
import products from "./assest/data/products";
function App() {
  const productsList = products.map((product) => {
    return (
      <div className="Menu-container">
        <img
          src={product.image}
          alt="Ratatouille restaurant "
          className="menuImage"
        />
        <h1>{product.name}</h1>
        <d>{product.price}</d>
      </div>
    );
  });

  return (
    <div className="container">
      <h1>Ratatouille</h1>
      <d>
        feast on French cuisine in this Parisian bistro straight from the world
        of a Disney Pixar classic
      </d>
      <img
        src={restaurant_image}
        alt="Ratatouille restaurant "
        className="resutrantImage"
      />
      <div className="Menu-section">{productsList}</div>
    </div>
  );
}

export default App;
