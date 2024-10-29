import logoSVG from "../assets/logo.svg";

function Sidebar() {
  return (
    <div id="sidebar" className="h-full w-[150px] bg-black text-white">
      <div id="sidebar-logo">
        <img src={logoSVG} />
      </div>
      <div id="sidebar-menu">
        <button>HOME</button>
        <button>SHOP ALL</button>
        <button>CART</button>
      </div>
    </div>
  );
}

export default Sidebar;
