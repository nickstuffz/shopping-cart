import { Link } from "react-router-dom";
import logoSVG from "../assets/logo.svg";
import PropTypes from "prop-types";

function Sidebar({ cartCount }) {
  if (cartCount > 99) {
    cartCount = "99+";
  }
  return (
    <div
      id="sidebar-container"
      className="sticky top-0 flex h-screen w-40 min-w-max"
    >
      <div
        id="sidebar"
        className="flex h-full flex-1 flex-col items-end gap-20 border-l bg-black text-white opacity-90"
      >
        <div id="sidebar-logo" className="mr-4 mt-20">
          <img src={logoSVG} />
        </div>
        <div id="sidebar-menu" className="flex flex-col items-end gap-9">
          <Link to={``}>HOME</Link>
          <Link to={`shop`}>SHOP ALL</Link>
          <Link to={`cart`} className="flex gap-1">
            <p className="h-6 w-6 rounded-full bg-white text-center text-xs text-black">
              {cartCount}
            </p>
            <p>CART</p>
          </Link>
        </div>
      </div>
      <div className="h-full w-5 border-l bg-black opacity-90"></div>
    </div>
  );
}

Sidebar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Sidebar;
