import { Layout } from "@/components/Layout";
import { useContext } from "react";
import { api } from "api/api";
import Link from "next/link";
import { useQuery } from "react-query";
import { CharacterProps } from "pages/character/[name]/CharacterProps.types";
import { CharacterList } from "@/components/CharacteresList";
import { AppContext } from "context/app";
import { CharacterListProps } from "@/components/CharacteresList/characterList.types";
export default function Favorites() {
  const { favorites } = useContext(AppContext)


  const { data, isLoading, error } = useQuery<CharacterProps[]>(['favorite-characts'], () => api.getFavorites(favorites))
  const hasFavorites = (data:any) => {
    let verify = data?.length < 1 || data?.info
    return !verify
  }
  return (
    <Layout className="favoritos">
      {hasFavorites(data)  ? <CharacterList
          results={data}
          isLoading={isLoading}
        /> 
      :
      <h1 style={{
        textAlign: 'center',
        margin: '10rem 0'
      }}>Ora ora, nada por aqui... :D <Link href={'/'}><button>Voltar para a Home</button></Link>
      </h1> 
         
      }

    </Layout>
  )
}