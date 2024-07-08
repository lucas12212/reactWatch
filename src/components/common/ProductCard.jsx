import React from "react";
import "../../css/newcss.css";

export default function ProductCard({ product }) {
    return (
        <div className="col-md-4 product1">
            <div className="product" style={{ position: 'relative', display: 'inline-block' }}>
                <img src={`data:img/png;base64,${product.image_src}`} className="product-image"/>
                <button type="button" className="btn btn-primary product-name">{product.product_name}</button>
            </div>
        </div>
    );
}

