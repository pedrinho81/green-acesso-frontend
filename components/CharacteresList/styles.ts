import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  margin: 2rem 0;
  font-family: 'Open Sans',  sans-serif;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  .error {
    color: #ff0000;
  }
`;

export const Card = styled.div`
  color: #fff;
  background-color:  rgb(82 82 91);
  border: 1px solid #24a66b;
  width: 17rem;
  margin: 1.5rem;
  padding: 1rem;
  `;

  export const Error = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    margin: 1rem;
    padding: 1rem;
    width: 70%;
    border-radius: 5px;
    color: #fff;
    background-color: #24a66b;
    cursor: pointer;
    align-self: center;
    :hover {
      opacity: 0.9;
      transition: ease-in-out 0.21s
    }
  }
  `;