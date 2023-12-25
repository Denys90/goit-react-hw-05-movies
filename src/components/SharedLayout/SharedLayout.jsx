import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, LinkStyled } from './Header.styled';
import { FcFilmReel } from 'react-icons/fc';

const SharedLayout = () => {
  return (
    <>
      <>
        <Header>
          <span>
            <FcFilmReel />
            GoSearch
          </span>
          <nav>
            <ul>
              <li>
                <LinkStyled to="/" end>
                  Home
                </LinkStyled>
              </li>
              <li>
                <LinkStyled to="/movies">Movies</LinkStyled>
              </li>
            </ul>
          </nav>
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    </>
  );
};

export default SharedLayout;
