import { Dispatch, SetStateAction } from "react"

export type AppContextProps = {
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  search: string,
  setSearch: Dispatch<SetStateAction<string>>,
  resetFilters: () => void;
  handleToggleFavorite: (id:number) => void;
  favorites: number[]
}