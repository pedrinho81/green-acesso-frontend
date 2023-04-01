import {toast} from 'react-toastify'
import { CharacterListProps } from "@/components/CharacteresList/characterList.types";
import { CharacterProps } from 'pages/character/[name]/CharacterProps.types';
let baseUrl = `https://rickandmortyapi.com/api/character/`;

const fetchData = async (page: number, search: string):Promise<CharacterListProps> => {
  try {
    let params = `?page=${page}&name=${search}`
    const res = await (await fetch(`${baseUrl}${params}`)).json()
    return res
  } catch (error) {
    toast.error('Ops, houve um erro inesperado.')
    throw(error)
  } 
}

const fetchDetail = async (id: string | string[] | undefined):Promise<CharacterProps> => {
  try {      
    const res = await (await fetch(`${baseUrl}${id}`)).json()
    return res
  } catch (error) {
    toast.error('Ops, houve um erro inesperado.')
    throw(error)
  }

}

const getFavorites = async (ids: number[]):Promise<CharacterProps[]> => {
  try {      
    if(!ids) return []
    const res = await (await fetch(`${baseUrl}${ids}`)).json()
    return res
  } catch (error) {
    toast.error('Ops, houve um erro inesperado.')
    throw(error)
  }

}

export const api = {
  fetchData,
  fetchDetail,
  getFavorites
}