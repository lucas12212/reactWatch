import React from "react";

export default function ProductCard({name}) {

    return (
        <div class="col-md-4 product1">
            <div class="product bg_${item.product_id}_Img">
              <button type="button" class="btn btn-primary">{name}</button>
            </div>
          </div>
    );
  }