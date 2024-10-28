import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Root;
