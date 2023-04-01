import Image from "next/image"
import Link from "next/link"
import { LayoutProps } from "./layout.types"
import { Search } from "../Search"
import * as L from "./styles"
export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
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
            <L.NavLi >
              <Link href={'/'}>
                <L.NavLink active={className === 'home'}  >Home</L.NavLink>
              </Link>

            </L.NavLi>
            <L.NavLi >
              <Link href={'/favoritos'}>
                <L.NavLink active={className === 'favoritos'}>Favoritos</L.NavLink>
              </Link>
            </L.NavLi>
          </L.MainNav>
        </L.Bar>
        <main>{children}</main>

        <footer>© 2023 - Pedro Henrique</footer>
      </L.Body>
    </>

  )
}