import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <ul id="navbar">
          <li>
            <Link to="/">Space</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;