import "./Layout.css";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => window.innerWidth > 949 && setIsOpen(false);

  useEffect(() => {
    window.addEventListener("resize", closeSidebar);
    return () => window.removeEventListener("resize", closeSidebar);
  }, []);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='page__content'>
        <main
          className={`main ${
            location.pathname === "/" ? "main-page" : "other-page"
          }`}
        >
          <Outlet />
        </main>
      </div>
      <Footer />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
