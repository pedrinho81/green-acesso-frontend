import { useContext, useEffect } from "react";
import { ApiContext } from "context/api";
import { useRouter } from "next/router";
import Head from "next/head";
import { Layout } from "@/components/Layout";
import { CharacterDetail } from "@/components/CharacterDetail";
import Loading from "@/components/Loading";

export default function Character() {
  const { setId, characterDetail, isLoading } = useContext(ApiContext)
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    console.log(id)
    if (typeof id === 'string') setId(id)
  }, [router.query])


  return (
    <>
      <Head>
        <title>{characterDetail ? characterDetail.name : 'Carregando...'}</title>
      </Head>
      
      <Layout>
        {!isLoading && !!characterDetail ? <CharacterDetail
        key={characterDetail.id}
        id={characterDetail.id}
        gender={characterDetail.gender}
        location={characterDetail.location}
        name={characterDetail.name}
        origin={characterDetail.origin}
        species={characterDetail.species}
        status={characterDetail.status}
        type={characterDetail.type}
        image={characterDetail.image}
      />
        : <Loading/> }  
      </Layout>
    </>
  )
}

