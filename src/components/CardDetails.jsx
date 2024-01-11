const CardDetails = ({singleProductDetails}) => {
  const {title, brand, images, category, thumbnail, price, discountPercentage, rating, stock, description }= singleProductDetails;
  return (
    <>
      <div className="p-5">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={thumbnail}
            alt={brand}
          />
        </figure>
        <div className="card-body">     
          <h2 className="card-title">{title}</h2>
          <p>Brand: {brand} </p>
          <p> Price: {price}$ </p>
          <p>Discount: {discountPercentage}%</p>
          <p> Category: {category} </p>
          <p>Rating: {rating} </p>
          <p>Stock: {stock} </p>
          <p>{description}</p>
          <div className="card-actions justify-end">
          <button className="btn btn-outline btn-success">Buy Now</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CardDetails;
