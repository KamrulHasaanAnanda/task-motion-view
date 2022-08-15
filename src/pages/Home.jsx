import React, { useEffect, useState } from "react";
import ApiServices from "../apis/ApiServices";
import ProductCard from "../components/cards/ProductsCard";
import MainLayout from "../components/MainLayout";

function Home() {
  const [productData, setproductData] = useState();
  const getProduct = async () => {
    const response = await ApiServices.getProduct();
    // console.log("response", response.data);
    setproductData(response.data);
  };

  useEffect(() => {
    getProduct();
  }, []);
  let showProduct = "";
  if (productData?.length > 0) {
    showProduct = productData
      .map((product) => {
        return (
          <div className="col-lg-3 mt-2" key={product.id}>
            <ProductCard product={product} />
          </div>
        );
      })
      .reverse();
  }
  return (
    <MainLayout slider={true}>
      <div className="row">{showProduct}</div>
    </MainLayout>
  );
}

export default Home;
