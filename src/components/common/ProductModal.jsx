import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductModal({ product, isOpen, onClose, debugInfo }) {
  useEffect(() => {
    if (debugInfo) {
      console.log('Product Modal Debug Info:', debugInfo);
    }
  }, [debugInfo]);

  if (!isOpen) return null;

  return (
    <div className="modal fade show" style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{product.product_name}</h1>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Price: ${product.product_cost}</p>
            <p>Stock: {product.stocks_left}</p>
            <p>Reviews: {product.no_reviews}</p>
            <p>Average Rating: {product.avg_rating}/5</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;


