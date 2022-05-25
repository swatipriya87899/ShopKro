import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Router>
      <Routes>
        <Route exact path="/" element={<ProductListing />}></Route>
        <Route
          exact
          path="/product/:productId"
          element={<ProductDetails />}
        ></Route>
        <Route>404 Not Found</Route>
      </Routes>
      </Router>
    </div>
  );
};

export default App;
