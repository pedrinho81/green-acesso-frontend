import { createContext, useEffect, useState } from "react"
import { ApiContextProps } from "./apiContext.types";
import { toast } from 'react-toastify'
import { CharacterListProps } from "@/components/CharacteresList/characterList.types";
import { CharacterProps } from "pages/character/[name]/CharacterProps.types";
export const ApiContext = createContext<ApiContextProps>({} as ApiContextProps)

export const ApiProvider = ({ children }: any) => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [id, setId] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const baseUrl = `https://rickandmortyapi.com/api/character/`;
  const [characters, setCharacters] = useState<CharacterListProps | null>(null);
  const [characterDetail, setCharacterDetail] = useState<CharacterProps | null>(null);
  let params: string = ""
  const fetchData = async (id?: string) => {
    setIsLoading(true);
    try {
      params = id ? id :
        `?page=${page}&name=${search}`
      
      const res = await (await fetch(`${baseUrl}${params}`)).json()

      res.error ? [toast.error(res.error), setCharacters(null)]
        : [setCharacters(res), setCharacterDetail(res)]

    } catch (error) {
      toast.error('Ops, houve um erro inesperado.')
    } finally {
      setIsLoading(false)
    }
    
  }
  useEffect(() => {
    fetchData(id)
  }, [search, page, id])


  const resetFilters = () => {
    setSearch('');
    setPage(1);
  }
  return (
    <ApiContext.Provider
      value={{
        page,
        setPage,
        search,
        setSearch,
        setId,
        characters,
        characterDetail,
        resetFilters,
        fetchData,
        isLoading
      }}>
      {children}
    </ApiContext.Provider>
  )
}