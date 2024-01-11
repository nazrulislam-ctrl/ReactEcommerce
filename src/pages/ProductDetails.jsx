import { useParams } from "react-router-dom";
import CardDetails from "../components/CardDetails";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  function getSingleProduct() {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }

  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <>
      <div className="bg-red-200">
      <CardDetails singleProductDetails={singleProduct}/>
      </div>
    </>
  );
};

export default ProductDetails;
