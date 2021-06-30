import Head from 'next/head'
import SectionBrandUniversiteMetier from '../components/molecules/SectionBrandUniversiteMetier'


export default function Metier() {
  return (
    <div className="App">
      <Head>
        <title>Etablissement</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className="main">
          <br/><br/> <br/><br/> <br/><br/>
        <SectionBrandUniversiteMetier />
      </main>

    </div>
  )
}
