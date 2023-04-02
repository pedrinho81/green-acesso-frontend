import styled, { keyframes } from "styled-components";

const pulsate = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
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
    color: var(--white);
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
    background-color: var(--green);
    height: 15%;
  padding: 0.5rem;
  }
  td {
    text-overflow: ellipsis;
    overflow-x: hidden;
    cursor: copy;
    max-width: 10rem;
    padding: 1rem;
    text-align: start;
    background-color:  var(--medium-dark);
    height: 8;
        p {
          display: none;
        }
  }

  @media screen and (max-width: 1140px) {
    table-layout: fixed;
   width: 90%;
    margin: 0 auto;
    thead {
      display: none;
    }
    tr {
      display: flex;
      flex-direction: column;

      td {
        overflow-wrap: break-word;
        max-width: 100%;
        p {
          display: block;
          color: var(--green);;
          font-size: 0.8rem
        }
      }
    }
  }
`;

