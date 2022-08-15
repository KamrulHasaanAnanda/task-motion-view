import React, { useEffect, useState } from "react";
import { getCartData } from "../../utils/helpers";
import CartProduct from "./CartProduct";

function Cart({ setIsCartOpen, isCartOpen }) {
  let cartData = getCartData();
  const [price, setprice] = useState(0);
  const [priceUpdate, setpriceUpdate] = useState(0);
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

  return (
    <div
      className={`cart-container ${isCartOpen ? "cart-open" : "cart-close"}`}
    >
      <div className="cart-header ">
        <div className="cart-icon">
          <span>
            {" "}
            <i className="fas fa-shopping-basket"></i>
          </span>
          <span>
            {/* {cartData?.length} */}
            Cart Items
          </span>
        </div>
        <div className="close" onClick={() => setIsCartOpen(false)}>
          <p>X</p>
        </div>
      </div>

      <div class="cart-product-container mt-5 mb-5">{showCartData}</div>

      <div class="cart-footer">
        <div class="cart-total">
          <p class="total-price d-flex justify-content-between">
            <span>Total</span>
            <span>{price} Tk</span>
          </p>
          <span class="procced-checkout pointer">Proceed to Checkout</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
