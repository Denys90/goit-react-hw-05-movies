import styled from '@emotion/styled';

export const GastList = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const CastCard = styled.li`
  position: relative;
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    text-align: center;

    p {
      font-weight: bold;
      color: white;
      margin: 0;
    }
  }
`;
