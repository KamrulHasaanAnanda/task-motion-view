import React, { useState } from "react";
import Cart from "./Cart/Cart";

function FloatingCartButton() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // let cartData = getCartData();
  return (
    <>
      <div
        className="sidebar_drawer d-none d-lg-block"
        onClick={() => setIsCartOpen(true)}
        // onClick={flashDealBtnHandler}
      >
        <div className="cart_count d-flex justify-content-center align-items-center">
          Cart
          {/* <span>{cartData?.length} Items</span> */}
        </div>
        {/* <div className="total_price">0 Tk</div> */}
      </div>
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
}

export default FloatingCartButton;
