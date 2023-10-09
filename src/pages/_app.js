import './globals.css';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return <>
        <Head>
            <title>Matteo Mertz</title>
        </Head>
        <Component {...pageProps}></Component>
    </>
}