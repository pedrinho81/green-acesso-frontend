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
  color: #fff;
  background-color:  rgb(82 82 91);
  border: 1px solid #24a66b;
  border-radius: 15px;
  width: 17rem;
  margin: 1.5rem;
  padding: 1rem;
  :hover {
    transform:  scale(1.03);
    transition: 0.3s;
    border-color: #fff;
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
    background-color: #fff;
    color: #24a66b;
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
  background-color: ${({ isFavorite }) => (isFavorite ? "#f9a825" : "#e0e0e0")};
  color: ${({ isFavorite }) => (isFavorite ? "#fff" : "#333")};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ isFavorite }) =>
    isFavorite ? "#f4c244" : "#ccc"};
  }

  &:active {
    transform: scale(0.9);
  }
`;