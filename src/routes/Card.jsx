import PropTypes from "prop-types";

function Card({ imgSrc, title, price }) {
  return (
    <div
      id="card"
      className="flex flex-col border border-black
        "
    >
      <img className="h-4/5 w-full object-contain" src={imgSrc} />
      <div className="flex h-1/5 flex-col">
        <p className="text-xs">{title}</p>
        <p className="text-center text-xs font-bold">${price}</p>
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
