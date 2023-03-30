import { Dispatch, SetStateAction } from "react"
import { CharacterProps } from "@/components/Character/Character.types"
import { CharacterListProps } from "@/components/CharacteresList/characterList.types"
export type ApiContextProps = {
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  name: string,
  setName: Dispatch<SetStateAction<string>>,
  characters: CharacterListProps | null,
  isLoading: boolean,
  resetFilters: () => void;
}