import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CartCard({
  id,
  imgSrc,
  title,
  price,
  quantity,
  slug,
  handleAddQuantity,
  handleSubtractQuantity,
}) {
  return (
    <div
      id="cart-card"
      className="flex h-48 rounded border border-dotted border-black
    "
    >
      <Link to={`/shop/${slug}`} className="w-1/4 border border-dotted ">
        <img className="object-contain" src={imgSrc} />
      </Link>
      <div className="flex flex-1 flex-col items-center gap-2 pt-2 text-center">
        <p className="text-sm font-bold">{title}</p>
        <p className="font-mono font-bold">${price.toFixed(2)}</p>
        <p>quantity:</p>
        <div className="flex w-28 select-none justify-evenly border border-black">
          <button
            onClick={() => {
              if (quantity === 1) return;
              handleSubtractQuantity({ id });
            }}
            className="flex-1 bg-slate-300 text-center"
          >
            -
          </button>
          <div className="w-9 text-center">{quantity}</div>
          <button
            onClick={() => {
              handleAddQuantity({ id });
            }}
            className="flex-1 bg-slate-300 text-center"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  handleAddQuantity: PropTypes.func.isRequired,
  handleSubtractQuantity: PropTypes.func.isRequired,
};

export default CartCard;
