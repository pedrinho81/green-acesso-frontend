import styled from "styled-components";

export const Body = styled.main`
  header {
  text-align: center;
  font-size: 3rem;
  margin-top: 2rem;
  color: #24a66b;
  }
  footer {
    text-align: center;
    position: relative;
    margin: 2rem;
    bottom: 0;
  }
`;
export const Bar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background-color:  rgb(82 82 91);;
  border: 1px solid rgba(0,0,0,0.2);
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
color: ${({ active }) => (active ? "#24a66b" : "#ccc")};
text-decoration: ${({ active }) => (active ? "underline" : "none")};
font-family: ${({ active }) => (!active ? "Archivo Black":"sans-serif"  )} sans-serif;

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
  color: #24a66b;
  @media (min-width: 768px) {    
    margin: 0px 10px;
  }
`
export const NavBarToggle = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer; 
  color: rgba(255,255,255,0.8);
  font-size: 24px;
`
export const Hamburger = styled.img`
  /* add your menu icon here i.e. */
  /* content: url('../static/Hamburger_icon.svg'); */
  content: url(data:image/svg+xml,%3Csvg%20height%3D%2232px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M4%2C10h24c1.104%2C0%2C2-0.896%2C2-2s-0.896-2-2-2H4C2.896%2C6%2C2%2C6.896%2C2%2C8S2.896%2C10%2C4%2C10z%20M28%2C14H4c-1.104%2C0-2%2C0.896-2%2C2%20%20s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2S29.104%2C14%2C28%2C14z%20M28%2C22H4c-1.104%2C0-2%2C0.896-2%2C2s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2%20%20S29.104%2C22%2C28%2C22z%22%2F%3E%3C%2Fsvg%3E);
  @media (min-width: 768px) {
    display: none;
  }
`