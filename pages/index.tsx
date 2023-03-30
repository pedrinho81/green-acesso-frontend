import { useContext, useEffect } from 'react'
import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { CharacterList } from '@/components/CharacteresList'
import { ApiContext } from 'context/api';
import { Search } from '@/components/Search'
import { useQuery } from 'react-query';
import { CharacterListProps } from '@/components/CharacteresList/characterList.types';
import { api } from 'api/api';

export default function Home() {
  const {search, page} = useContext(ApiContext);

  const {data, isLoading} = useQuery<CharacterListProps>(['character-list', page, search], () => api.fetchData(page, search))

 console.log(data)
  return (
    <>
      <Head>
        <title>Página inicial</title>
      </Head>
      <Layout>
        <Search/>
        <CharacterList
        results={data && data.results}
        info={data && data.info}
        isLoading={isLoading}
        error={data?.error}/>
      </Layout>
    </>
  )
}
