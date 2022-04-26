import type { NextPage } from 'next'
import Head from 'next/head'
//import Image from 'next/image'
import Header from '../components/Header'
import Hero1 from '../components/Hero1'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium Blog 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex items-center">
        <Hero1 />
      </div>
    </div>
  )
}

export default Home
