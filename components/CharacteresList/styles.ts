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
`;

export const Card = styled.div`
  color: var(--white);
  background-color:  var(--medium-dark);
  border: 1px solid var(--green);
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
    color: var(--white);
    background-color: var(--green);
    cursor: pointer;
    align-self: center;
    :hover {
      opacity: 0.9;
      transition: ease-in-out 0.21s
    }
  }
  `;