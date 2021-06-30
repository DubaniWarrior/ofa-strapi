import Head from 'next/head'
import SectionBottomShapeEtablissement from '../components/molecules/SectionBottomShapeEtablissement'
import SectionBrandUniversiteEtablissement from '../components/molecules/SectionBrandUniversiteEtablissement'


export default function Etablissement() {
  return (
    <div className="App">
      <Head>
        <title>Etablissement</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className="main">
          <br/><br/> <br/><br/> <br/><br/>
        <SectionBottomShapeEtablissement />
        <SectionBrandUniversiteEtablissement />
      </main>

    </div>
  )
}
