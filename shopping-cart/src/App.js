import Cart from "./components/Cart/Cart";
import Favorites from "./components/favorites/Favorites";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar"
import ProductsList from "./components/products/ProductsList";
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">

      <NavBar />
      
      <Routes>
         <Route path="/" element={<ProductsList />} />
         <Route path="/Favorites" element={<Favorites />} />
         <Route path="/Cart" element={<Cart />} />


      </Routes>

      <Footer />
    
    </div>
  );
}

export default App;
