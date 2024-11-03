import PropTypes from "prop-types";

function Card({ imgSrc, title, price }) {
  return (
    <div
      id="card"
      className="flex h-80 w-56 flex-col border border-black
        "
    >
      <img className="h-4/5 w-full object-contain" src={imgSrc} />
      <div className="flex h-1/5 flex-col bg-yellow-100 text-center">
        <p className="text-xs">{title}</p>
        <p className="text-xs font-bold">${price}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
