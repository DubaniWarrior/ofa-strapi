import Head from 'next/head'
import SectionBrandUniversiteFormation from '../components/molecules/SectionBrandUniversiteFormation'


export default function Formation() {
  return (
    <div className="App">
      <Head>
        <title>Etablissement</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className="main">
          <br/><br/> <br/><br/> <br/><br/>
        <SectionBrandUniversiteFormation />
      </main>

    </div>
  )
}
