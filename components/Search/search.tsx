import { FormEvent, useState, useContext } from "react";
import { AppContext } from "context/app";
import { FormContainer } from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";
export const Search: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const { setPage, setSearch, search, resetFilters } = useContext(AppContext)
  const router = useRouter()
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault()
    router.push('/')
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
        priority
      />
      <input autoComplete="off" onChange={handleChangeParam} value={value} required name="name" type="text"
        placeholder="Ex: Smith" />
        {value && <button className="reset" onClick={() => [resetFilters(), setValue('')]} type="button">Limpar</button>} 
      <button type="submit">Buscar</button>
    </FormContainer>
  )
}