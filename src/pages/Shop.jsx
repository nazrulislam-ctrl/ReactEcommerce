import { useEffect, useState } from "react";
import AllCard from "../components/AllCard";

function Shop() {
  const [allCard, setAllCard] = useState([]);
  const [loading, setLoading] = useState(null);
  function getallCard() {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllCard(data.products);
        setLoading(false);
      });
  }
  useEffect(() => {
    getallCard();
  }, []);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-3 p-4 bg-orange-100">
        {loading?(<span className="loading loading-spinner text-warning"></span>):(
          <>
          {allCard.map((shop, i) => (
          <AllCard key={i} shopInfo={shop} />
        ))};
          </>
        )}
      </div>
    </>
  );
}

export default Shop;
