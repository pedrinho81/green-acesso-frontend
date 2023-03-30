import { FormEvent, useState, useContext } from "react";
import { ApiContext } from "context/api";
import Loading from "../Loading";
import { FormContainer } from "./styles";
import Image from "next/image";
export const Search: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const { setPage, setSearch, isLoading } = useContext(ApiContext)
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setPage(1)
    setSearch(value)
  }

  const handleChangeParam = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    setValue(value)
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
      <button type="submit">Buscar</button>
    </FormContainer>
  )
}