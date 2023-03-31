import { useContext } from "react"
import { Container } from "./styles"
import { PaginationProps } from "./pagination.types"
import { AppContext } from "context/app"
export const Pagination:React.FC<PaginationProps> = ({info}) => {
    const {page, setPage} = useContext(AppContext)
    const toStartPage = () => {
      setPage(1)
    }
    const nextPage = () => {
      if (page >= info.pages) {
        return;
      }
      setPage(page + 1);
    };
  
    const backPage = () => {
      if (page <= 1) {
        return;
      }
      setPage(page - 1);
    };
    const toLastPage = () => {
      setPage(info.pages)
    }
  return (
    <Container>
      <button onClick={toStartPage}>{"<<"}</button>
      <button onClick={backPage}>{"<"}</button>
      <span>{page}</span>
      <span>de</span>
      <span>{info?.pages}</span>
      <button onClick={nextPage}>{">"}</button>
      <button onClick={toLastPage}>{">>"}</button>

    </Container>
  )
}