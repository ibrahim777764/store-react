import { Outlet, Link } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';

const Layout = () => (
  <>
    <header className="bg-white mb-5">
      <nav className="container d-flex align-items-center justify-content-between p-0">
        <ul className="d-flex align-items-center justify-content-between m-0 p-0 gap-5">
          <li className="header-text">Bookstore CMS</li>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
        <IoIosPerson className="icon" />
      </nav>
    </header>
    <Outlet />
  </>
);

export default Layout;
