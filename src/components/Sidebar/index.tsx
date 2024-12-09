import { FC } from "react";
import Navbar from "../Navbar";
import SidebarContent from "./Item";
import { Outlet } from "react-router-dom";
import Logout from "./Logout";

const Sidebar: FC = () => {
  return (
    <main className="text-light h-[100vh] min-h-[100vh] overflow-y-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Body */}
      <section className="flex items-center h-full">
        <aside className="h-full w-[18vw] min-w-[345px] border-r border-r-gray-color overflow-y-auto">
          <div className="flex flex-col overflow-y-auto h-[92vh] min-h-[92vh]">
            <SidebarContent />
            <Logout />
          </div>
        </aside>
        <section className="w-full h-full">
          <Outlet />
        </section>
      </section>
    </main>
  );
};

export default Sidebar;
