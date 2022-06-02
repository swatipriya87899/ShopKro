import React, { useEffect } from "react";
import "./ProductComponent.css";
import { Card } from "@mui/material";
import axios from "axios";
import { setProducts } from "./../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  //All products
  const { products } = useSelector((state) => state.allProducts);

  //Collection of filtered Product
  const {filterProducts} = useSelector((state)=> state.allProducts);

  let listed_products;
  if(filterProducts.length ===0)
  listed_products = products;
  else
  listed_products=filterProducts;

  console.log(listed_products)

  const dispatch = useDispatch();
  //fetching all products API
  const fetchProducts = async () => {
    const response = await axios("https://fakestoreapi.com/products").catch(
      (err) => console.log("err", err)
    );
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="card_group">
      {listed_products.map((products) => {
        return (
          <Link to={`./product/${products.id}`} style={{textDecoration:"none"}}>
          <Card sx={{ maxWidth: 275 }} className="card">
            <div className="image">
              <img
                src={products.image}
                alt="product"
                width="100%"
                height="100%"
              ></img>
            </div>
            <div className="title">{products.title}</div>
            <div className="price_category">
                <div className="price">$ {products.price}</div>
                <div className="category">{products.category}</div>
            </div>
          </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductComponent;
