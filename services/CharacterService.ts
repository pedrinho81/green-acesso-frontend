import { api } from "lib/api";
import { CharacterListProps } from "@/components/CharacteresList/characterList.types";
export const getCharactersData = async (params?: string) => {
  try {
    const {data} = await api.get(`/character${params && `/${params}`}`)
    console.log('@@res:')
    console.log(data)
    return data;
  } catch (error: any) {
    console.log('@@err:response')
    console.log(error.response.data.error)
    console.log('@@err:message')
    console.log(error.message)
    /* error.response
      ? toast.error(error.response.data.message)
      : toast.error('Ocorreu um erro no servidor, tente novamente mais tarde ou entre em contato com o suporte.') */
    return false
  }
}