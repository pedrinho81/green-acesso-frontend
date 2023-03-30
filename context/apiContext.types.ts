import { Dispatch, SetStateAction } from "react"
import { CharacterListProps } from "@/components/CharacteresList/characterList.types"
import { CharacterProps } from "pages/character/[name]/CharacterProps.types";
export type ApiContextProps = {
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  search: string,
  setSearch: Dispatch<SetStateAction<string>>,
  setId: Dispatch<SetStateAction<string>>,
  characters: CharacterListProps | null,
  characterDetail: CharacterProps | null,
  isLoading: boolean,
  resetFilters: () => void;
  fetchData: (id?: string | undefined) => void
}