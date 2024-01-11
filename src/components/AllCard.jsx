import { Link } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";

const AllCard = ({shopInfo}) => {
    const{thumbnail, brand, price, category, description, id, discountPercentage, rating, stock, title}= shopInfo;
  return (
    <>
    <div className="card w-72  bg-base-100 shadow-xl ">
        <figure className="h-[50%]">
          <img src={thumbnail} alt={brand} />
        </figure>
        <div className="card-body p-5">
        <h2 className="card-title">{title}</h2>
          <p>Price: {price}$</p>
          <p>Discount: {discountPercentage}%</p>
          <p> Category: {category} </p>
          <p>Rating: {rating} </p>
          <p>Stock: {stock} </p>
          <div className="card-actions justify-between">
          <button className="btn btn-outline btn-success">Buy Now</button>      
            <Link to={`/productDetails/${id}`}>
            <button className="btn btn-primary">More Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllCard;