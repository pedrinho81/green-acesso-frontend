import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { Layout } from "@/components/Layout";
import { CharacterDetail } from "@/components/CharacterDetail";
import Loading from "@/components/Loading";
import { CharacterProps } from "../../../components/CharacterDetail/CharacterProps.types";
import { useQuery } from "react-query";
import { api } from "api/api";
import { AppContext } from "context/app";
import { ErrorMessage } from "@/components/ErrorMessage";
export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const { favorites } = useContext(AppContext);

  const {data, isLoading} = useQuery<CharacterProps>(['character-detail', id], () => api.fetchDetail(id))

  if(data?.error) {
    return (
      <ErrorMessage message="Ora Ora, nada por aqui... :D"/>
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

