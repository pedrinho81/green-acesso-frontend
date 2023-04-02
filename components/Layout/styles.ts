import styled from "styled-components";

export const Body = styled.main`
  header {
  text-align: center;
  font-size: 3rem;
  margin-top: 2rem;
  color: var(--green);
  }
  main {
    min-height: 82vh;
  }
  footer {
    text-align: center;
    position: relative;
    margin: 1rem;
    bottom: 0;
  }
`;
export const Bar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background-color:  var(--medium-dark);;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`

export const MainNav = styled.ul`
  list-style-type: none;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: start;
  }
`
type NavLink = {
  active: boolean;
}
export const NavLi = styled.li`
  text-align: center;
  margin: 15px auto;
  
  
  `
export const NavLink = styled.span<NavLink>`
list-style-type: none;
display: flex;
flex-direction: column;
color: ${({ active }) => (active ? 'var(--green)' : "var(--gray)")};
text-decoration: ${({ active }) => (active ? "underline" : "none")};
font-family: ${({ active }) => (!active ? "Archivo Black":"sans-serif"  )} sans-serif;
:hover {
  opacity: .8;
  transition: ease-in-out 0.21s

}
  @media (min-width: 768px) {    
    margin: 0px 10px;
  }
`
export const Logo = styled.a`
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 10px;
  text-align: center;
  font-size: 22px;
  margin-top: 0rem;
  color: var(--green);
  @media (min-width: 768px) {    
    margin: 0px 10px;
  }
`

