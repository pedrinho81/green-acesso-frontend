import { createContext, useEffect, useState } from "react"
import { ApiContextProps } from "./apiContext.types";
import {toast} from 'react-toastify'
import { CharacterListProps } from "@/components/CharacteresList/characterList.types";
export const ApiContext = createContext<ApiContextProps>({} as ApiContextProps)

export const ApiProvider = ({ children }: any) => {
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const baseUrl = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`;
  const [characters, setCharacters] = useState<CharacterListProps| null>(null);
  
  const fetchData = async () => {
    try {
      const res = await (await fetch(baseUrl)).json()
      console.log(!!res.error)
      console.log(res.results)
      res.error ? toast.error(res.error)
      : setCharacters(res)
      
      
      console.log(characters) 
    } catch (error) {
      toast.error('Ops, houve um erro inesperado.')
    }
  }
  useEffect(() => {
    fetchData()
  }, [name, page])
  console.log(baseUrl)
  return(
    <ApiContext.Provider
    value={{
        page, 
        setPage,
        name,
        setName,
        characters
      }}>
      {children}
    </ApiContext.Provider>
  )
}