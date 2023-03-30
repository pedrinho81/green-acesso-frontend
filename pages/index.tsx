import { useContext, useEffect } from 'react'
import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { CharacterList } from '@/components/CharacteresList'
import { ApiContext } from 'context/api';
import { Search } from '@/components/Search'


export default function Home() {
  const {characters, fetchData, isLoading} = useContext(ApiContext)
 useEffect(() => {
  fetchData()
 }, [])
  return (
    <>
      <Head>
        <title>Página inicial</title>
      </Head>
      <Layout>
        <Search/>
        <CharacterList
        results={characters && characters.results}
        info={characters && characters.info}
        isLoading={isLoading}/>
      </Layout>
    </>
  )
}
