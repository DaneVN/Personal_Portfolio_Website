import { Outlet } from "react-router-dom";
import Footer from "../assets/sections/Footer";
import Header from "../assets/sections/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="text-center lg:text-2xl ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
