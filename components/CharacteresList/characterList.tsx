
import { useContext } from 'react'
import * as C from "./styles"
import { CharacterListProps } from "./characterList.types"
import { CharacterCard } from '@/components/CharacterCard'
import Loading from "../Loading"
import { AppContext } from "context/app"
import { Pagination } from "../Pagination"
import { ErrorMessage } from '../ErrorMessage'

export const CharacterList: React.FC<CharacterListProps> = ({ results, info, isLoading, error }) => {
  const { resetFilters, favorites } = useContext(AppContext);

  return (
    <>
      <C.Title>Personagens</C.Title>
      <C.Container>
        {isLoading ? <Loading />
          : (Array.isArray(results) ? results.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite={favorites.includes(character.id)} />
          )) :  results && <CharacterCard
          key={results.id}
          character={results}
          isFavorite={favorites.includes(results.id)} />
          )}

        {error && <ErrorMessage
        message={'Não há resultados para sua busca :('}/>}

      </C.Container>
      {info && <Pagination info={info} />}
    </>
  )
}