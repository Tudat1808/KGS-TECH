import React, { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
