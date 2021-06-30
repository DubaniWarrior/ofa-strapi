import Head from 'next/head'
import SectionBrandUniversiteMetier from '../components/molecules/SectionBrandUniversiteMetier'
import SectionSignup from '../components/molecules/SectionSignup'

export default function Login() {
  return (
    <div className="App">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className="main">
        <div className="section section-padding-bottom page-title-section">
            <SectionSignup />
        </div>

      </main>

    </div>
  )
}
