import styled from "styled-components";
export const Container = styled.div`
display: flex;
gap: 16px;
align-items: center;
justify-content: center;
> button {
    padding: 1rem;
    border-radius: 5px;
    color: #fff;
    background-color: #24a66b;
    cursor: pointer;
    :hover {
      opacity: 0.9;
      transition: ease-in-out 0.21s
    }
}`;