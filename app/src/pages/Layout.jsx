import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main className="flex flex-col text-center items-center py-16 bg-gray-800 w-full h-full">
        <h1 className="font-bold text-4xl">
          Sorry, looks like this website is under re-construction
        </h1>
        <h2>
          I am currently making a better version of my portfolio page, please be
          patient with me. The new website should be up by the 21st of March!
        </h2>
        <h2>Kind regards, DVN</h2>
        {/* test if images show in build */}
        <img src="/daneFace.jpg" alt="Dev's Face" className="max-w-xl" />
      </main>

      <Outlet />
    </>
  );
};

export default Layout;
