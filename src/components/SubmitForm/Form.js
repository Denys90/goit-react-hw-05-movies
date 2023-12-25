import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    padding-left: 10px;
    font: inherit;
    font-size: 18px;
    color: #ddd6d6;
    border-radius: 5px;
    width: 400px;
    height: 40px;
    border: none;
    background-color: rgba(205, 214, 219, 0.2);
    ::placeholder {
      padding-left: 10px;
      font: inherit;
      font-size: 18px;
      color: #ddd6d6;
    }
    :focus,
    :hover {
      outline: none;
    }
  }
  button {
    color: #ddd6d6;
    position: absolute;
    left: 1135px;
    height: 40px;
    outline: none;
    padding: 0;
    margin: 0;
    border: 0;
    background-color: rgba(205, 214, 219, 0);
    cursor: pointer;

    :hover {
      transform: scale(1.5);
      color: white;
      opacity: 1;
    }
  }
`;
