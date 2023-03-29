import * as C from "./styles"
import { CharacterListProps } from "./characterList.types"
import {Character} from '@/components/Character'
import Loading from "../Loading"
export const CharacterList:React.FC<CharacterListProps> = ({results}) => {
  return (
    <>
    <C.Title>Personagens</C.Title>
    <C.Container>
    {results && results.length > 0 ? results.map((character) => (
      <Character character={character}/>
    ))
    : <Loading/> }
    </C.Container>
    </>
    
    
  )
}