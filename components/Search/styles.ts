import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid;
  border-radius: 5px;
  text-align: center;
  width: 90%;
  margin: 0 ;
  max-width: 40rem;
  border-color: var(--white);
  
  input {
    padding-left: 1rem;
    background-color: transparent;
    flex: 1;
    width: 100%;
    height: 2rem;
    border-radius: 4px;
    color: var(--white);
  }
  .reset {
    background-color: transparent !important;
  }
  button:nth-child(2) {
    width: 6rem;
    height: 3.3rem;
    border-radius: 4px;
    color: var(--white);
    background-color: var(--green);
    cursor: pointer;
    :hover {
      opacity: 0.9;
      transition: ease-in-out 0.21s
    }
  }
`;