import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.main`
  margin: auto;
  width: 1000px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;

  background-color: rgba(205, 214, 219, 0.2);
`;
export const Section = styled.section`
  display: flex;
  justify-content: space-between;
`;
export const ImageContainer = styled.div`
  img {
    width: 300px;
    height: 400px;
    border-radius: 5px;
  }
`;
export const GenresList = styled.ul`
  display: flex;
  gap: 10px;
  color: #cfcaca;
`;
export const Score = styled.p`
  display: block;
  padding-bottom: 10px;
`;
export const MovieDetailsContainer = styled.div`
  flex: 1;
  margin-left: 20px;

  h1 {
    color: #cfcaca;
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    color: #cfcaca;
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 10px 0;

    li {
      margin-bottom: 5px;
    }
  }
`;
export const InfoContainer = styled.div`
  flex: 1;

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #cfcaca;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 5px;
    }
  }
`;
export const LinkStyled = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  transition: color 0.3s;
  text-decoration: none;
  color: #cfcaca;
  &:hover {
    color: #007bff;
    transition: 0.3s;
  }
`;

export const GoToBack = styled(NavLink)`
  text-decoration: none;
  color: #cfcaca;
  display: flex;
  align-items: center;
  padding-bottom: 10px;

  :hover {
    transition: 0.3s;
    color: #007bff;
  }
`;
