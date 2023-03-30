import { useRouter } from "next/router";
import Head from "next/head";
import { Layout } from "@/components/Layout";
import { CharacterDetail } from "@/components/CharacterDetail";
import Loading from "@/components/Loading";
import { CharacterProps } from "./CharacterProps.types";
import { useQuery } from "react-query";
import { api } from "api/api";
export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const {data, isLoading} = useQuery<CharacterProps>(['character-list', id], () => api.fetchDetail(id))

  if(data?.error) {
    return (
      <h1 style={{
        textAlign: 'center',
        margin: '10rem 0'
      }}>Olha só, acho temos alguém aqui que informou um id inválido diretamente pela url, não é mesmo? rsrs
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
      />
        : <Loading/> }  
      </Layout>
    </>
  )
}

