import React from "react";
import { getAuth, getCartData, setCart } from "../../utils/helpers";
import {
  toastifyAlertError,
  toastifyAlertSuccess,
} from "../alert/tostifyAlert";
import Image from "../image/Image";

function ProductCard({ product }) {
  let loginNow = getAuth();
  let addToCart = (p) => {
    if (loginNow) {
      const carts = getCartData();
      p.qty = 1;
      // console.log("p :>> ", p);
      carts.push(p);
      // console.log("carts", carts);
      toastifyAlertSuccess("Product added to card", "top-right");
      setCart(carts);
    } else {
      toastifyAlertError("Please login first", "top-right");
    }
  };
  return (
    <div className="Pro__card">
      <div className="pdtCrd__img mb-3">
        <Image
          src={`https://idbdev.com/motion2/public/images/${product.image}`}
          height={"250px"}
          width={"100%"}
        />
        <span className="discount">
          OFF <span>20%</span>
        </span>
      </div>
      <span className="mb-1 d-block sub_title fw-bold ">{product.name}</span>

      <div className="price__content mb-2 d-flex align-items-center">
        <span className="price">${product.sale_price}</span>
        <span className="ms-3">
          <del>${product.regular_price}</del>
        </span>
      </div>
      <span className="mb-3 d-block">Stock: {product.stock}</span>
      <button
        type="button"
        class="btn d-block w-100"
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
