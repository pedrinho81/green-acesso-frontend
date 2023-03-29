import { SetStateAction, Dispatch } from "react"
import { CharacterListProps } from "../CharacteresList/characterList.types";

export type SearchProps = {
  setCharacters: Dispatch<SetStateAction<CharacterListProps | null>>
}

export type ParamsProps = {
  name?: string,

  
}