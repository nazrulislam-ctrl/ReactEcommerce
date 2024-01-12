import { Link } from "react-router-dom";

function Card({ cardInfo }) {
  const {title, thumbnail, price, category, id, rating, stock, discountPercentage } = cardInfo;
  return (
    <>
      <div className="card w-72  bg-base-100 shadow-xl ">
        <figure>
          <img className="w-[300px] h-[200px]" src={thumbnail} alt={title} />
        </figure>
        <div className="card-body gap-0">
          <h2 className="card-title">{title}</h2>
          <p>Price: {price}$</p>
          <p>Discount: {discountPercentage}%</p>
          <p> Category: {category} </p>
          <p>Rating: {rating} </p>
          <p>Stock: {stock} </p>
          <div className="card-actions justify-between mt-3">
          <button className="btn btn-outline btn-success">Buy Now</button>
            <Link to={`/productDetails/${id}`}>
            <button className="btn btn-primary">More Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
