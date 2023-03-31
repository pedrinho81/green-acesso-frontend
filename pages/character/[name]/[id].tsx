import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { Layout } from "@/components/Layout";
import { CharacterDetail } from "@/components/CharacterDetail";
import Loading from "@/components/Loading";
import { CharacterProps } from "./CharacterProps.types";
import { useQuery } from "react-query";
import { api } from "api/api";
import { AppContext } from "context/app";
export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const { favorites } = useContext(AppContext);

  const {data, isLoading} = useQuery<CharacterProps>(['character-detail', id], () => api.fetchDetail(id))

  if(data?.error) {
    return (
      <h1 style={{
        textAlign: 'center',
        margin: '10rem 0'
      }}>Ora ora, nada por aqui... :D <Link href={'/'}><button>Voltar para a Home</button></Link> 
      </h1>
    )
  }
  return (
    <>
      <Head>
        <title>{data ? data.name : 'Carregando...'}</title>
      </Head>
      <Layout>
        {!isLoading && !!data ? <CharacterDetail
        key={data.id}
        id={data.id}
        gender={data.gender}
        location={data.location}
        name={data.name}
        origin={data.origin}
        species={data.species}
        status={data.status}
        type={data.type}
        image={data.image}
        isFavorite={favorites.includes(Number(id))}
      />
        : <Loading/> }  
      </Layout>
    </>
  )
}

