import { createContext, useState } from "react"
import { ApiContextProps } from "./apiContext.types";

export const ApiContext = createContext<ApiContextProps>({} as ApiContextProps)

export const ApiProvider = ({ children }: any) => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [id, setId] = useState<string>('')

  const resetFilters = () => {
    setSearch('');
    setPage(1);
  }
  return (
    <ApiContext.Provider
      value={{
        page,
        setPage,
        search,
        setSearch,
        setId,
        resetFilters,
      }}>
      {children}
    </ApiContext.Provider>
  )
}