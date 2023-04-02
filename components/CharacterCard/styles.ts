import styled from "styled-components";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
`;


export const Card = styled.div`
  position: relative;
  color: var(--white);
  background-color:  var(--medium-dark);
  border: 1px solid var(--green);
  border-radius: 15px;
  width: 17rem;
  margin: 1.5rem;
  padding: 1rem;
  padding-bottom: 0.5rem;
  :hover {
    transform:  scale(1.03);
    transition: 0.3s;
    border-color: var(--white);
  }
   > h1 {
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
    max-width: 80%;
  }
  span {
    font-size: 1rem;
    font-family: sans-serif, Arial
  }
  img  {
    border-radius: 100%;
  }
  button {
    background-color: var(--white);
    color: var(--green);
    padding: 0.5rem !important;
  }
  `;

export const ContainerDetails = styled.div`
display: flex;
div {
  flex: 1 0;
  margin-right: 0.3rem;
}
`;
interface StarProps {
  isFavorite: boolean;
}
export const Star = styled.div<StarProps>`
  position: absolute;
  top: 0.7rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: cell!important;
  background-color: ${({ isFavorite }) => (isFavorite ? "var(--gold)" : "var(--white)")};
  color: ${({ isFavorite }) => (isFavorite ? "var(--white)" : "var(--dark)")};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ isFavorite }) =>
    isFavorite ? "var(--light-gold)" : "var(--gray)"};
  }

  &:active {
    transform: scale(0.9);
  }
`;