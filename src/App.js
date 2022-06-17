import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Faq from "./pages/faq";
import Products from "./pages/products";
import Contact from "./pages/contact";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;