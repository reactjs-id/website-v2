import * as React from 'react'

import type { AppProps } from 'next/app'
import { Box, Flex } from '@chakra-ui/core'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

import AppProvider from '~/components/AppProvider'
import Footer from '~/components/layout/Footer'

export default function CustomAppPage({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <DefaultSeo
        title="ReactJS ID"
        titleTemplate="%s · ReactJS Indonesia"
        description="ReactJS ID adalah komunitas para developer React dan React Native. Kami mengadakan ajang meetup setiap bulannya, dimana para developer React bertukar informasi mengenai React dan ekosistemnya."
        openGraph={{
          title: 'ReactJS ID',
          description:
            'ReactJS ID adalah komunitas para developer React dan React Native. Kami mengadakan ajang meetup setiap bulannya, dimana para developer React bertukar informasi mengenai React dan ekosistemnya.',
          type: 'website',
          site_name: 'ReactJS ID'
        }}
      />

      <Flex flexDir="column" minH="100vh" justifyContent="space-between">
        <Box as="main" flexGrow={1}>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Flex>
    </AppProvider>
  )
}
