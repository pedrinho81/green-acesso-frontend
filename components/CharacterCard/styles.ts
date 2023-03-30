import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
`;

export const Card = styled.div`
  position: relative;
  cursor: pointer;
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
  h1 {
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
    max-width: 80%;
  }
  span {
    font-size: 1rem;
    font-family: sans-serif, Arial
  }
  img {
    border-radius: 100%;
  }
  
  `;
type AliveProps = {
  status: string
}

export const Alive = styled.div<AliveProps>`

        position: absolute;
        top: 0.7rem;
        right: 1rem;
        border: 1px solid black;
        padding: 0.2em;
        border-radius: 5px;
        background: ${props => props.status === 'Alive' ? '#24a66b' : 'red'};
      

`;