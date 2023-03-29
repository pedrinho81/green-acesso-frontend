import {FormEvent, useState} from "react";
import { getCharactersData } from "services/CharacterService";
import {toast} from 'react-toastify'
import { SearchProps, ParamsProps } from "./search.types";
import Loading from "../Loading";
import { FormContainer } from "./styles";
import Image from "next/image";
export const Search:React.FC<SearchProps> = ({setCharacters}) => {

  const [params, setParams] = useState<ParamsProps | null>({})
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const paramsFilter = params ? 
  `?name=${params.name}`
  : '';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    event.preventDefault()
    const res = await getCharactersData(paramsFilter)
    console.log(params)
    console.log(res)
    res ? setCharacters(res) : toast.error('Não há resultados para sua busca.')
    setIsLoading(false)
  }

  const handleChangeParam = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setParams({
        ...params,
        [name]: value
    })
}
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Image src={'https://img.icons8.com/ios/50/ffffff/search-client.png'}
      width={40}
      height={40}
      alt={'1'}
      />
      
      <input onChange={handleChangeParam} required name="name" type="text"
      placeholder="Ex: Smith" />

      {isLoading ? <Loading/>
      : <button type="submit">Buscar</button>}
      
      
    </FormContainer>
  )
}