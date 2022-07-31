import Header from "../components/Header";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>짝퉁 깃허브</title>
      </Head>
      <Header />
      <Component { ...pageProps } />
      <style jsx global>{`
        body {
          margin: 0;
          font-family: 'Noto Sans KR', sans-serif;
        }
      `}</style>
    </>
  )
}

export default MyApp;