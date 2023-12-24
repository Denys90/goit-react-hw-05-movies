import { Suspense } from 'react';
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default SharedLayout;
