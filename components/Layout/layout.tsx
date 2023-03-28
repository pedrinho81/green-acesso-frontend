import { LayoutProps } from "./layout.types"
import * as L from "./styles"
export const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <L.Body>
    <header>Green Acesso</header>
     <main>{children}</main> 
    <footer>© 2023 - Pedro Henrique</footer>
    </L.Body>
    
  )
}