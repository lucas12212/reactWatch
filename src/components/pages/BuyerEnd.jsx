import React, { useEffect, useState } from "react";
import "../../css/newcss.css";
import banner from "../../assets/banner.png";
import NavBar from "../common/NavBar.jsx";
import axios from "axios";
import ProductCard from "../common/ProductCard.jsx";
import ProductModal from "../common/ProductModal.jsx";
import FilterModal from "../common/FilterModal.jsx";
import Footer from "../common/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const BuyerEnd = () => {
  const [productList, setProductList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Object to keep track of open modals
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    fetchProducts();
    fetchBrands();
  }, [brand, minPrice, maxPrice, rating]);

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

  const fetchProductCard = async (productId) => {
    console.log(`Fetching ProductCard for product ID: ${productId}...`);
    try {
      const response = await axios({
        method: 'post',
        url: `http://localhost:8888/Supply_Chain_Project/api/productCard.php`,
        data: { product_id: productId },
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
        }
      });
      console.log("Fetched product data: ", response); // Debug: Verify product data
      if (response.data.product) {
        console.log(response.data.product)
        setSelectedProduct(response.data.product);
      } else {
        console.log("No product data found in response");
      }
    } catch (error) {
      console.error("Error fetching product data: ", error);
    }
  };

  const openModal = (product) => {
    console.log('Opening modal for product:', product); // Debug: Verify product data
    fetchProductCard(product.product_id); // Fetch product card data when opening the modal
  };

  const closeModal = () => {
    setSelectedProduct(null);
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
                onClick={() => openModal(product)}
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
      {selectedProduct != null && (
        <ProductModal
          product={selectedProduct}
          isOpen={selectedProduct != null}
          onClose={() => closeModal()}
        />
      )}
      <Footer />
    </div>
  );
};

export default BuyerEnd;
