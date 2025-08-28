import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import useSidebar from "../store/useSidebar";
import { useShallow } from "zustand/shallow";

const Layout = () => {
  const [isOpen, toggleSidebar] = useSidebar(
    useShallow((state) => [state.isOpen, state.toggleSidebar])
  );

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar for large screens (docked) */}
      <div className="hidden lg:flex sticky top-0 h-screen z-50">
        <Sidebar />
      </div>

      {/* Sidebar drawer for small screens */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={toggleSidebar}
          ></div>

          {/* Drawer */}
          <div className="fixed flex top-0 left-0 h-full bg-primary border-r border-border shadow-sm z-50 lg:hidden animate-slideIn">
            <Sidebar />
          </div>
        </>
      )}

      {/* Main content */}
      <main className="flex flex-col container mx-auto">
        <div className="sticky top-0 bg-bg z-40">
          <Header />
        </div>
        <div className="bg-bg">
          <section
            className={`flex-1 mt-2 bg-primary shadow-sm rounded-md mr-2 border border-border ${
              isOpen ? `ml-0` : `ml-3`
            }`}
          >
            <Outlet />
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
