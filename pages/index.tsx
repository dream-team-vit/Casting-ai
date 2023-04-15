import Head from 'next/head'
import HeaderSection from '@/components/Header'
import InputSection from '@/components/Input'
import PredictedScore from '@/components/Score'
import HomeComponent from '@/components/Home'


export default function Home() {
  return (
    <>
      <Head>
        <title>Casting.ai</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/casting.ai-logo.png" />
      </Head>
        <HeaderSection />
        <HomeComponent />
    </>
  )
}
