import { useContext } from 'react'
import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { CharacterList } from '@/components/CharacteresList'
import { AppContext } from 'context/app';
import { Search } from '@/components/Search'
import { useQuery } from 'react-query';
import { CharacterListProps } from '@/components/CharacteresList/characterList.types';
import { api } from 'api/api';

export default function Home() {
  const {search, page} = useContext(AppContext);

  const {data, isLoading} = useQuery<CharacterListProps>(['character-list', page, search], () => api.fetchData(page, search))

  return (
    <>
      <Head>
        <title>Página inicial</title>
      </Head>
      <Layout className='home'>
        <CharacterList
        results={data && data.results}
        info={data && data.info}
        isLoading={isLoading}
        error={data?.error}/>
      </Layout>
    </>
  )
}
