import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ShopCard({ imgSrc, title, price, slug }) {
  return (
    <Link
      to={`/shop/${slug}`}
      id="shop-card"
      className="flex flex-col rounded border border-dotted border-black
    "
    >
      <img className="h-3/4 w-full object-contain p-4" src={imgSrc} />
      <div className="flex flex-1 flex-col justify-evenly text-center">
        <p className="text-sm">{title}</p>
        <p className="font-mono font-bold">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

ShopCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ShopCard;
