
import { useContext } from 'react'
import * as C from "./styles"
import { CharacterListProps } from "./characterList.types"
import { CharacterCard } from '@/components/CharacterCard'
import Loading from "../Loading"
import { AppContext } from "context/app"
import { Pagination } from "../Pagination"

export const CharacterList: React.FC<CharacterListProps> = ({ results, info, isLoading, error }) => {
  const { resetFilters, favorites } = useContext(AppContext);
  return (
    <>
      <C.Title>Personagens</C.Title>
      <C.Container>
        {isLoading ? <Loading />
          : (results && results.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite={favorites.includes(character.id)} />
          ))
          )}

        {error && <C.Error>
          <h1 className="error">Não há resultados para sua busca :( </h1>
          <button onClick={resetFilters}>Voltar</button>
        </C.Error>}

      </C.Container>
      {info && <Pagination info={info} />}
    </>
  )
}