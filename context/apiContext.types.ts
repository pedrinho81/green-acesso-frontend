import { Dispatch, SetStateAction } from "react"

export type ApiContextProps = {
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  search: string,
  setSearch: Dispatch<SetStateAction<string>>,
  setId: Dispatch<SetStateAction<string>>,
  resetFilters: () => void;
}