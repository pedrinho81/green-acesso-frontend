import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { AppContext } from "context/app";
import { Layout } from "@/components/Layout";
import { api } from "api/api";
import { useQuery } from "react-query";
import { CharacterProps } from "@/components/CharacterDetail/CharacterProps.types";
import { CharacterList } from "@/components/CharacteresList";
import { ErrorMessage } from "@/components/ErrorMessage";
export default function Favorites() {

  const { favorites } = useContext(AppContext)

  const { data, isLoading } = useQuery<CharacterProps[]>(['favorite-characts'], () => api.getFavorites(favorites))

  const hasFavorites = (data:any) => {
    let verify = data?.length < 1 || data?.info
    return !verify
  }

  return (
    <>
    <Head>
        <title>Favoritos</title>
      </Head>
    <Layout className="Favoritos">
      {hasFavorites(data)  ? <CharacterList
          results={data}
          isLoading={isLoading}
        /> 
      :
      <ErrorMessage message="Você não tem personagens favoritos... :("/>
      }
    </Layout>
    </>
  )
}