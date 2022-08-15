
const authToken = "mv_token";

export const getToken = () => window.localStorage.getItem(authToken);

export const setToken = (token) => {
  token
    ? window.localStorage.setItem(authToken, token)
    : window.localStorage.removeItem(authToken);
};

export const getUser = () => window.localStorage.getItem("mtuser");

export const setUser = (token) => {
  token
    ? window.localStorage.setItem("mtuser", token)
    : window.localStorage.removeItem("mtuser");
};

export const getAuth = () => window.localStorage.getItem("authNow");

export const setAuth = (token) => {
  token
    ? window.localStorage.setItem("authNow", token)
    : window.localStorage.removeItem("authNow");
};


export const getCartData = () => {
  let carts = localStorage.getItem("MTVcarts") || '';

  if (typeof carts !== "undefined" && carts !== null && carts !== '') {
    carts = JSON.parse(carts) || [];
  }
 
  if (Array.isArray(carts)) {
    carts.forEach((cart, index) => {
      carts[index] = cart;
    });
    return carts;
  }

  return [];
}


export const setCart = (carts) => {
  carts
    ? window.localStorage.setItem("MTVcarts", JSON.stringify(carts))
    : window.localStorage.removeItem("MTVcarts");
};


export const updateCartQty = (product_id, qty) =>{
  // console.log('qty', qty)
  const carts = getCartData();


  if (qty === 0) {

  } else {
  // console.log('qty', qty)

    carts.forEach((cart, index) => {
      // console.log('art.product_id === product_id', product_id)
      if (cart.id === product_id) {
        // console.log('cart', cart)
        cart.qty = qty;
        carts[index] = cart;
      }
    });

    localStorage.setItem('MTVcarts', JSON.stringify(carts));
    // showToast('success', 'Carts Item Updated !')
  }
}
