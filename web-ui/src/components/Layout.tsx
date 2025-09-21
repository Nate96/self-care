import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import './../css/Layout.css';

const Layout = () => {
  useEffect(() => { }, [])

  return (
    <>
      <div className="Layout">
        <Link to="/" className="item">New</Link>
        <Link to="/stats" className="item"> Stats</Link>
      </div>
      <Outlet />
    </>
  )
};

export default Layout
