import styled, { keyframes } from "styled-components";

const pulsate = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  max-width:120rem;
  align-items: baseline;
  justify-content: space-around;
  justify-items: center;
  margin-top: 7rem;
  div:nth-child(2) {
    animation: ${pulsate} 2s ease-in-out infinite;
  }
  > div > a {
    display: block;
    color: #fff;
    text-align: center;
    margin-right: 1rem;

    margin-top: 1rem;
    @media screen and (min-width: 1140px) {
      text-align: end;
    }
  }
  > h1 {
    position: absolute; 
    font-size: 2rem;
    top: -5.5rem;
    text-decoration: underline;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 1000px;
  margin-right: 1rem;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  th {
    background-color: green;
    height: 15%;
  padding: 0.5rem;
  }
  td {
    padding: 1rem;
    text-align: start;
    background-color:  rgb(82 82 91);
    height: 8;
        p {
          display: none;
        }
  }

  @media screen and (max-width: 1140px) {
   width: 80%;
    margin: 0 auto;
    thead {
      display: none;
    }
    tr {
      display: flex;
      flex-direction: column;

      td {
        p {
          display: block;
          color: #24a66b;;
          font-size: 0.8rem
        }
      }
    }
  }
`;

