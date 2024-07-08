import React , { useState }from "react";
import "../../css/newcss.css";
import ProductModal from "./ProductModal.jsx";

export default function ProductCard({ product }) {

    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="col-md-4 product1" onClick={() => setShowModal(true)}>
                <div className="product" style={{ position: 'relative', display: 'inline-block' }}>
                    <img src={`data:img/png;base64,${product.image_src}`} className="product-image" />
                    <button type="button" className="btn btn-primary product-name">{product.product_name}</button>
                </div>
            </div>

            {showModal && (
                <ProductModal
                    product={product}
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                />
            )}
        </>
    );
}

