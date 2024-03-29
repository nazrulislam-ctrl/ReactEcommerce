import { Link } from "react-router-dom";

const AllCard = ({ shopInfo }) => {
  const {thumbnail,brand, price, category, id, discountPercentage, rating,stock, title} = shopInfo;
  return (
    <>
      <div className="card w-72 bg-base-100 shadow-xl">
        <figure>
          <img className="w-[300px] h-[200px]" src={thumbnail} alt={brand} />
        </figure>
        <div className="card-body gap-0">
          <h2 className="card-title">{title}</h2>
          <p>Price: {price}$</p>
          <p>Discount: {discountPercentage}%</p>
          <p> Category: {category} </p>
          <p>Rating: {rating} </p>
          <p>Stock: {stock} </p>
          <div className="card-actions justify-center mt-3 items-center ">
            <button className="btn  btn-success">Buy Now</button>
            <Link to={`/productDetails/${id}`}>
              <button className="btn btn-primary">More Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCard;
