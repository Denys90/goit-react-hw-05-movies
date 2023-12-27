import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: rgba(205, 214, 219, 0.2);
  height: 80px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span {
    display: flex;
    align-items: center;
    margin-left: 60px;
    padding-right: 610px;
    font-size: 32px;
    font-weight: bold;
    color: rgb(47, 141, 231);
  }
  p {
    margin: 0;
    padding: 0;
    margin-left: 140px;
    color: rgb(231, 203, 47);
  }

  nav {
    ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;

      li {
        margin-right: 30px;
      }
    }
  }
`;
export const LinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(205, 214, 219, 0);
  text-decoration: none;
  font-size: 24px;
  color: #cfcaca;

  &.active {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 28%,
      rgba(237, 15, 15, 0.6) 100%
    );
  }
  :hover {
    transition: 0.3s;
    box-shadow: rgb(231, 203, 47) 20px 10px 0px,
      rgb(47, 141, 231) -15px -6px 0px;
  }
`;
