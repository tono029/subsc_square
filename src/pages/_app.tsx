import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from 'src/components/Layout'
import React from 'react'
import { AuthProvider } from 'src/firebase/AuthProvider'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
  
}

export default MyApp
