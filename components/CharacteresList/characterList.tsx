
import {useContext} from 'react'
import * as C from "./styles"
import { CharacterListProps } from "./characterList.types"
import {Character} from '@/components/Character'
import Loading from "../Loading"
import { ApiContext } from "context/api"
import { Pagination } from "../Pagination"

export const CharacterList:React.FC<CharacterListProps> = ({results, info, isLoading}) => {
  const {resetFilters} = useContext(ApiContext);
  return (
    <>
    <C.Title>Personagens</C.Title>
    <C.Container>
      {isLoading ? <Loading/>
      : (
        results && results.length > 0 ? results.map((character) => (
          <>
          <Character character={character}/>
          
          </>
        ))
        : (
          <C.Error>
          <h1 className="error">Não há resultados para sua busca :( </h1> 
          <button onClick={resetFilters}>Voltar</button>
          </C.Error>
        )
      )}
    
    </C.Container>
    {info && <Pagination info={info}/>}
    </>
    
    
  )
}