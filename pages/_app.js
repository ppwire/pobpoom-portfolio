import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import Layout from '../components/layout'
import Head from 'next/head'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
     
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
