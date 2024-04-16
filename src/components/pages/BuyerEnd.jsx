import React, { useEffect, useState } from "react";
import "../../css/newcss.css";
import banner from "../../assets/banner.png";
import NavBar from "../common/NavBar.jsx";
import axios from "axios";
import ProductCard from "../common/ProductCard.jsx"

const BuyerEnd = () => {
    const [productList,setProductList] = useState([]);
  useEffect(() => {
    handleSubmit();
  },[]);
  const handleSubmit = async (e) => {
    try {
      // Replace with your actual endpoint
      const response = await axios.post(
        "http://localhost:8888/Supply_Chain_Project/api/product.php",
        {},
        {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log(response.data);
      setProductList(response.data.products)
      console.log(productList)
      // Handle successful login here (e.g., redirect, store token, etc.)
    } catch (error) {
      console.error("Login error: ", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <NavBar />
      <div className="banner">
        <img src={banner} alt="Banner Photo" className="" />
      </div>
      <div className="container">
        <h2>Featured Products</h2>
        <div id="productContainer" className="row justify-content-between">
          {productList.map(function(product){
            return(
                <ProductCard name={product.product_name}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default BuyerEnd;
