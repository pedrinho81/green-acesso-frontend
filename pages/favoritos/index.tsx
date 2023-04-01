import { Layout } from "@/components/Layout";
import { useContext } from "react";
import { api } from "api/api";
import Link from "next/link";
import { useQuery } from "react-query";
import { CharacterProps } from "@/components/CharacterDetail/CharacterProps.types";
import { CharacterList } from "@/components/CharacteresList";
import { AppContext } from "context/app";
export default function Favorites() {

  const { favorites } = useContext(AppContext)

  const { data, isLoading } = useQuery<CharacterProps[]>(['favorite-characts'], () => api.getFavorites(favorites))

  const hasFavorites = (data:any) => {
    let verify = data?.length < 1 || data?.info
    return !verify
  }

  return (
    <Layout className="Favoritos">
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