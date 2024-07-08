import React, { useEffect, useState } from "react";
import "../../css/newcss.css";
import banner from "../../assets/banner.png";
import NavBar from "../common/NavBar.jsx";
import axios from "axios";
import ProductCard from "../common/ProductCard.jsx";
import FilterModal from "../common/FilterModal.jsx";
import Footer from "../common/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const BuyerEnd = () => {
  const [productList, setProductList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [brand, minPrice, maxPrice, rating]);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchProducts = async () => {
    console.log("Fetching products...");

    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8888/Supply_Chain_Project/api/product.php',
        data: {
          brand,
          min_price: minPrice || undefined,
          max_price: maxPrice || undefined,
          rating
        },
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
        }
      });
      console.log("Fetched products response:", response); // Debug: Verify full response
      setProductList(response.data.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProductList([]);
    }
  };

  const fetchBrands = async () => {
    console.log("Fetching brands...");
    try {
      const response = await axios.put(
        "http://localhost:8888/Supply_Chain_Project/api/product.php",
        {},
        {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Fetched brands response:", response); // Debug: Verify full response
      setBrandList(response.data.brands || []);
    } catch (error) {
      console.error("Error fetching brands:", error);
      setBrandList([]);
    }
  };

  const openFilterModal = () => {
    setShowFilterModal(true);
  };

  const closeFilterModal = () => {
    setShowFilterModal(false);
  };

  const handleFilter = (brand, minPrice, maxPrice, rating) => {
    console.log('Applying filters:', { brand, minPrice, maxPrice, rating }); // Debug: Verify filter values
    setBrand(brand);
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
    setRating(rating);
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <NavBar openFilterModal={openFilterModal} />
      <div className="banner">
        <img src={banner} alt="Banner Photo" />
      </div>
      <div className="container">
        <h2 className="center-text margin-bottom">Featured Products</h2>
        <div id="productContainer" className="row justify-content-between">
          {productList.length > 0 ? (
            productList.map((product) => (
              <div
                className="col-md-4"
                key={product.product_id} // Ensure unique key                
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
      {showFilterModal && (
        <FilterModal
          isOpen={showFilterModal}
          onClose={closeFilterModal}
          brands={brandList}
          test={handleFilter}
        />
      )}
      <Footer />
    </div>
  );
};

export default BuyerEnd;
