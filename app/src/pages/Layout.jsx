import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="grid grid-cols-4 p-5 gap-2">
        <div className="col-span-1">home</div>
        <span className="col-span-3 flex justify-evenly">
          <div>frontend</div>
          <div>backend</div>
        </span>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
