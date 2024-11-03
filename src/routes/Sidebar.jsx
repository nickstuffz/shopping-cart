import { Link } from "react-router-dom";
import logoSVG from "../assets/logo.svg";

function Sidebar() {
  return (
    <div
      id="sidebar-container"
      className="sticky top-0 flex h-screen w-40 min-w-max"
    >
      <div
        id="sidebar"
        className="flex h-full flex-1 flex-col items-end gap-20 border-l bg-black text-white"
      >
        <div id="sidebar-logo" className="mr-4 mt-20">
          <img src={logoSVG} />
        </div>
        <div id="sidebar-menu" className="flex flex-col items-end gap-9">
          <Link to={``}>HOME</Link>
          <Link to={`shop`}>SHOP ALL</Link>
          <Link to={`cart`}>CART</Link>
        </div>
      </div>
      <div className="h-full w-5 border-l bg-black"></div>
    </div>
  );
}

export default Sidebar;
