import React, { useEffect, useState } from "react";
import { updateCartQty } from "../../utils/helpers";
import { toastifyAlertError } from "../alert/tostifyAlert";
import CategoriCard from "../texts/CategoriCard";

function CartProduct({ product, getPrice }) {
  const [quantity, setquantity] = useState(1);
  useEffect(() => {
    if (typeof product !== "undefined" && product !== null) {
      setquantity(product.qty);
    } else {
      setquantity(0);
    }
  }, [product]);

  const updateQuantity = (qty) => {
    // console.log("object :>> ", qty);
    if (qty <= product.stock && quantity > 0) {
      setquantity(qty);
      getPrice(qty, product.id);
      updateCartQty(product.id, qty);
    } else {
      toastifyAlertError("Can not add more then stock !", "top-right");
    }
  };
  // console.log("product", product);
  return (
    <div className="mx-1">
      <CategoriCard
        width={"100%"}
        height={"100px"}
        className="align-items-center  d-flex  justify-content-center"
      >
        <div className="container">
          <div className="row text-dark g-1 align-items-center">
            <div className="col-2">
              <img
                src={`https://idbdev.com/motion2/public/images/${product.image}`}
                className=" imageCart"
                alt=""
              />
            </div>
            <div className="col-9 d-flex justify-content-center">
              <div className=" cartDetails">
                <h5 className="">{product.name}</h5>
                <p>
                  <span className="buttonS">
                    <span
                      className="m-2 fw-bold fs-16"
                      onClick={() => updateQuantity(quantity - 1)}
                    >
                      -
                    </span>
                    <span className="m-2 fw-bold fs-16 ">{quantity}</span>
                    <span
                      className="m-2 fw-bold fs-16"
                      onClick={() => updateQuantity(quantity + 1)}
                    >
                      +
                    </span>
                  </span>
                  <span className="ms-4 fs-15 fw-600 price-span">
                    {quantity * product.sale_price}
                  </span>
                </p>
              </div>
            </div>
            <div className="cross col-1">X</div>
          </div>
        </div>
      </CategoriCard>
    </div>
  );
}

export default CartProduct;
