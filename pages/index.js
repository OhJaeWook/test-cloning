import Head from 'next/head'
import Header from '../components/Header'
import BestGameList from '../components/BestGameList'
import LatestGameList from '../components/LatestGameList'
import HotGameList from '../components/HotGameList'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <BestGameList></BestGameList>
      <LatestGameList></LatestGameList>
      <HotGameList></HotGameList>
    </div>
  )
}
