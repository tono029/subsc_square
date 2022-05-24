import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from 'src/components/Layout'
import React from 'react'
import Flash from 'src/components/Flash'
import { AuthProvider } from 'src/firebase/AuthProvider'
import { GeneralProvider } from 'src/components/StateContext'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <GeneralProvider>
        <Layout>
          <>
            <Flash />
            <Component {...pageProps} />
          </>
        </Layout>
      </GeneralProvider>
    </AuthProvider>
  )
  
}

export default MyApp
