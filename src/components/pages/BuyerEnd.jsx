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
  const [selectedProductId, setSelectedProductId] = useState(null); // Object to keep track of open modals
  const [productInfo, setProductInfo] = useState([]);
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
    fetchProductInfo();
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

  const fetchProductInfo = async () => {
    console.log(`Fetching Product Info`);
    try {
      const response = await axios({
        method: 'get',
        url: `http://localhost:8888/Supply_Chain_Project/api/productCard.php`,
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
        }
      });
      if (response.data.products) {
        let product_dict = {}
        for (let product of response.data.products) {
          product_dict[product["product_id"]] = product
        }
        setProductInfo(product_dict);
      } else {
        console.log("No product data found in response");
      }
    } catch (error) {
      console.error("Error fetching product data: ", error);
    }
  };

  const openModal = (product) => {
    console.log('Opening modal for product:', product); // Debug: Verify product data    
    console.log(productInfo)
    setSelectedProductId(product.product_id)
    // fetchProductCard(product.product_id); // Fetch product card data when opening the modal
  };

  const closeModal = (productId) => {
    console.log("closing model")
    setSelectedProductId(null);
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

  useEffect(() => {
    console.log('Product List:', productList); // Debug: Verify product list state
  }, [productList]);

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
                <div onClick={() => openModal(product)}>
                  <ProductCard product={product} />
                </div>
                {selectedProductId == product.product_id && (
                  <ProductModal
                    product={productInfo[product.product_id]}
                    isOpen={!!productInfo[product.product_id]}
                    onClose={() => closeModal(product.product_id)}
                    debugInfo={{
                      product_id: product.product_id,
                      product_cost: productInfo[product.product_id]?.product_cost,
                      stocks_left: productInfo[product.product_id]?.stocks_left,
                      no_reviews: productInfo[product.product_id]?.no_reviews,
                      avg_rating: productInfo[product.product_id]?.avg_rating
                    }}
                  />
                )}
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
