import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@emotion/react'
import * as React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import emotionCache from '~/utils/emotionCache'
import theme from '~/utils/theme'

export default function CustomAppPage({ Component, pageProps, router }: AppProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''

  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#83e4fc" />
          <meta name="theme-color" content="#83e4fc" />
        </Head>

        <DefaultSeo
          title="ReactJS ID"
          titleTemplate="%s · ReactJS Indonesia"
          description="ReactJS ID adalah komunitas para developer React dan React Native. Kami mengadakan ajang meetup setiap bulannya, dimana para developer React bertukar informasi mengenai React dan ekosistemnya."
          canonical={baseUrl + router.asPath || ''}
          openGraph={{
            title: 'ReactJS ID',
            url: baseUrl,
            description:
              'ReactJS ID adalah komunitas para developer React dan React Native. Kami mengadakan ajang meetup setiap bulannya, dimana para developer React bertukar informasi mengenai React dan ekosistemnya.',
            type: 'website',
            site_name: 'ReactJS ID'
          }}
        />

        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  )
}
