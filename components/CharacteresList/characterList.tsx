import * as C from "./styles"
import Image from "next/image"
import { CharacterListProps } from "./characterList.types"
import {Character} from '@/components/Character'
export const CharacterList:React.FC<CharacterListProps> = ({results}) => {
  return (
    <>
    <C.Title>Personagens</C.Title>
    <C.Container>
    {results && results.map((character) => (
      <Character character={character}/>
    ))}
    </C.Container>
    </>
    
    
  )
}