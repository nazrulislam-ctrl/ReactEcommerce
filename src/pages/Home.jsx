import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null);

  const productFetch = () => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products.slice(0, 4));
        setLoading(false);
      });
  };

  useEffect(() => {
    productFetch();
  }, []);

  return (
    <>
      <div className="flex  h-[90vh] bg-red-300 ">
        <div className="w-[50%] flex justify-center items-center text-blue-700">
          <div>
          <p className="text-5xl">Apple Watch Series</p>
          <p className="text-2xl my-2 text-emerald-900">Naz Store</p>
          <p className="text-xl text-gray-100">Apple Watch is the ultimate device for a healthy life. <br /> Available in three models: <br /> Apple Watch Ultra 2, Apple Watch Series 9, <br /> and Apple Watch SE.</p>
          <button className="btn mt-3 btn-accent hover:bg-red-400">See More</button>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <img  src="https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2022/01/hero_large_2x-removebg-preview.png"></img>
        </div>
      </div>
      <div className="bg-slate-200"> 
      <div>
      <p className="text-5xl flex justify-center items-center p-4 text-black">Our Products</p>
      </div>
      <div className=" flex justify-center gap-2 flex-wrap p-4 ">
        {loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <>
            {products.map((pod, i) => (
              <Card key={i} cardInfo={pod} />
            ))}
          </>
        )}
      </div>
      <Link to={"/shop"} className="text-3xl flex justify-center items-center p-4"><button className="btn btn-accent border-t-red-300 border-b-red-300 hover:bg-blue-400">See All Products</button></Link>
      </div>
    </>
  );
}
export default Home;
