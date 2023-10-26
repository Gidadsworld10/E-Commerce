import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./container/Header";
import ProductDetails from"./container/ProductDetails";
import ProductListing from"./container/ProductListing";
import Cart from "./container/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" exact element=
        {<ProductListing />} />
        <Route path="/product/:productId" exact element=
        {<ProductDetails />} />
        <Route path="/cart" exact element=
        {<Cart />} />
        <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
