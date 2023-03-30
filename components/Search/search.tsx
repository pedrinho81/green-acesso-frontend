import {FormEvent, useState, useContext} from "react";
import { ApiContext } from "context/api";
import Loading from "../Loading";
import { FormContainer } from "./styles";
import Image from "next/image";
export const Search:React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const {setPage, setName, name, isLoading} = useContext(ApiContext)
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setPage(1)
    setName(search)
  }

  const handleChangeParam = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    setSearch(value)
}
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Image src={'https://img.icons8.com/ios/50/ffffff/search-client.png'}
      width={40}
      height={40}
      alt={'1'}
      />
      
      <input onChange={handleChangeParam} name="name" type="text"
      placeholder="Ex: Smith" />

      {isLoading ? <Loading/>
      : <button type="submit">Buscar</button>}
      
      
    </FormContainer>
  )
}