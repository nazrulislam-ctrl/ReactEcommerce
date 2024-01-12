import { useContext } from "react";
import CartCounter from "../context/CartCounter";

const CardDetails = ({singleProductDetails}) => {
  const {title, brand, category, thumbnail, price, discountPercentage, rating, stock, description }= singleProductDetails;

  const {counter, setCounter}= useContext(CartCounter);

  function increament(){
    setCounter(counter+1, {price}+{price});
  }
  function decreament(){
    if(counter>0){
      setCounter(counter-1, {price}-{price});
    }
  }
  return (
    <>
      <div className=" w-[100%] h-[100vh] flex justify-center items-center">
      <div className="card lg:card-side bg-base-100 shadow-xl w-[90%] h-[500px]">
        <figure className="w-[50%]">
          <img
            src={thumbnail}
            alt={brand}
          />
        </figure>
        <div className="card-body w-[50%] gap-0">     
          <h2 className="card-title">{title}</h2>
          <p>Brand: {brand} </p>
          <p> Price: {price}$ </p>
          <p>Discount: {discountPercentage}%</p>
          <p> Category: {category} </p>
          <p>Rating: {rating} </p>
          <p>Stock: {stock} </p>
          <p>{description}</p>
          <div className="card-actions justify-end">
          <button onClick={increament} className="btn btn-outline btn-success">+</button>
          <button className="btn btn-warning"> {counter} Cart</button>
          <button onClick={decreament} className="btn btn-outline btn-error">-</button>
          <button className="btn btn-outline btn-success">Buy Now</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CardDetails;
