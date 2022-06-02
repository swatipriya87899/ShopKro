import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct,removeSelectedProduct, addToCart } from "../redux/actions/productActions";
import './ProductDetails.css';
import { Card } from "@mui/material";
import { Button } from "@mui/material";

const ProductDetails = () => {
  const product = useSelector((state) => state.selected_product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios(
      `https://fakestoreapi.com/products/${productId}`
    ).catch((err) => console.log("Error", err));
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    console.log("yes");
    if (productId && productId !== "") fetchProduct();
    return (()=>{
      dispatch(removeSelectedProduct());
    })
  }, [productId]);

  return (
    <div>
      {
        <div className="product_page">
          <Card className="product_image_card">
            <img src={product.image} width="80%" height="100%"></img>
          </Card>
          <Card className="product_details_card">
            <div className="product_title">{product.title}</div>
            <div className="product_description">{product.description}</div>
            <Button variant="contained" onClick={()=>dispatch(addToCart(product))}>Add To Cart</Button>
          </Card>
        </div>
      }
    </div>
  );
};

export default ProductDetails;
