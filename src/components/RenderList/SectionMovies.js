import styled from '@emotion/styled';

export const SectionMovies = styled.section`
  margin: 20px 0;
  display: inline-flexbox;
  justify-content: center;
  text-align: center;

  ul {
    margin-left: 560px;
    width: 800px;
    border-radius: 5px;
    background-color: rgba(205, 214, 219, 0.2);
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 16px;
    padding: 10px;
    margin: 5px 0;
    color: #cfcaca;

    cursor: pointer;
    transition: background-color 0.3s;
    :hover {
      background-color: rgba(205, 214, 219, 0.2);
    }
  }
`;
