import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  max-width: 40rem;
  border-color: #fff;
  input {
    padding-left: 1rem;
    background-color: transparent;
    flex: 1;
    width: 100%;
    min-height: 100%;
    color: #fff;
  }
  button {
    width: 6rem;
    height: 2.5rem;
    border-radius: 5px;
    color: #fff;
    background-color: #24a66b;
    cursor: pointer;
    :hover {
      opacity: 0.9;
      transition: ease-in-out 0.21s
    }
  }
`;