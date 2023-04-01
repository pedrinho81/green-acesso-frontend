import Image from "next/image"
import Link from "next/link"
import { LayoutProps } from "./layout.types"
import { Search } from "../Search"
import * as L from "./styles"
export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  const navLinks = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Favoritos',
    href: '/favoritos'
  }]
  return (
    <>
      <L.Body>
        <L.Bar>
          <L.Logo href="/">
            <Image
              alt="Green Acesso"
              src={'/logo.webp'}
              width={150}
              height={40} />
          </L.Logo>
          <Search />
          <L.MainNav>
            {navLinks.map(({ name, href }) => (
              <L.NavLi key={name}>
                <Link href={href}>
                  <L.NavLink active={className === name} >{name}</L.NavLink>
                </Link>
              </L.NavLi>
            ))}
          </L.MainNav>
        </L.Bar>
        <main>{children}</main>

        <footer>© 2023 - Pedro Henrique</footer>
      </L.Body>
    </>

  )
}