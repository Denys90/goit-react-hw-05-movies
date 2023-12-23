import { Outlet, NavLink } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <section>
      <header>
        <span>GoSearch</span>
        <nav>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </nav>
      </header>
      <Outlet />
    </section>
  );
};

export default SharedLayout;
