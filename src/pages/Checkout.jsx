import React, { useEffect, useState } from "react";
import {
  toastifyAlertError,
  toastifyAlertSuccess,
} from "../components/alert/tostifyAlert";
import CartProduct from "../components/Cart/CartProduct";
import CheckLogin from "../components/CheckLogin";
import MainLayout from "../components/MainLayout";
import { getCartData } from "../utils/helpers";

function Checkout() {
  let cartData = getCartData();
  const [price, setprice] = useState(0);
  const [priceUpdate, setpriceUpdate] = useState(0);
  const [placeOrder, setplaceOrder] = useState(false);
  // console.log("cartData :>> ", cartData);
  let getPrice = (qty, id) => {
    setpriceUpdate(qty);
    let total = 0;

    cartData.map((product) => {
      if (product?.order === true) {
        return total;
      } else {
        total += product.sale_price * product.qty;
      }
    });
    setprice(total);
  };
  useEffect(() => {
    getPrice();
  }, [cartData, priceUpdate]);
  // console.log("price", price);
  let showCartData = "";
  if (cartData?.length > 0) {
    showCartData = cartData.map((product) => {
      if (product?.order === true) {
        return [];
      } else {
        return (
          <CartProduct product={product} key={product.id} getPrice={getPrice} />
        );
      }
    });
  } else {
    showCartData = (
      <div class="floating_cart__not_found mt-2 p-4 text-center">
        <img
          src="https://i.pinimg.com/originals/92/8a/ef/928aef164c221f42d171f10665e721b1.jpg"
          alt="empty cart"
          class="img-fluid"
        />
        <p>
          Oop!!! Your cart is empty ! <br /> Start shopping
        </p>
      </div>
    );
  }

  const placeOrderSubmit = () => {
    if (!placeOrder) {
      toastifyAlertError("Select a payment method", "top-right");
    } else {
      cartData.forEach((cart, index) => {
        // console.log('cart', cart)
        cart.order = true;
        cartData[index] = cart;
      });

      localStorage.setItem("MTVcarts", JSON.stringify(cartData));
      toastifyAlertSuccess("Order placed successfully", "top-right");
      setpriceUpdate(false);
    }
  };

  return (
    <MainLayout slider={false}>
      <div className="sliders container">
        <h2>Checkout</h2>
        <select
          className="form-select check-select"
          onChange={(e) => {
            setplaceOrder(e.target.value);
          }}
        >
          <option selected>Select delivery method</option>
          <option value="1">Cash on delivery</option>
        </select>

        <div className="my-4">
          <h2>Your orders:</h2>

          <div class="cart-product-container">{showCartData}</div>

          <div class="cart-footer">
            <div class="cart-total">
              <p class="total-price d-flex justify-content-between">
                <span style={{ fontSize: "20px", fontWeight: "600" }}>
                  Total
                </span>
                <span
                  style={{
                    background: "#009688",
                    color: "white",
                    padding: "11px",
                    marginTop: "10px",
                  }}
                >
                  {price} Tk
                </span>
              </p>
              <div className="text-end">
                <span class="btn btn-primary" onClick={placeOrderSubmit}>
                  Place order
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default CheckLogin(Checkout);
