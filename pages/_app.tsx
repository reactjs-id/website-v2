import * as React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import AppProvider from '~/components/AppProvider'
import { siteUrl } from '../next-sitemap'

export default function CustomAppPage({ Component, pageProps, router }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <DefaultSeo
        title="ReactJS ID"
        titleTemplate="%s · ReactJS Indonesia"
        description="ReactJS ID adalah komunitas para developer React dan React Native. Kami mengadakan ajang meetup setiap bulannya, dimana para developer React bertukar informasi mengenai React dan ekosistemnya."
        canonical={siteUrl + router.asPath || ''}
        openGraph={{
          title: 'ReactJS ID',
          url: siteUrl,
          description:
            'ReactJS ID adalah komunitas para developer React dan React Native. Kami mengadakan ajang meetup setiap bulannya, dimana para developer React bertukar informasi mengenai React dan ekosistemnya.',
          type: 'website',
          site_name: 'ReactJS ID'
        }}
      />

      <Component {...pageProps} />
    </AppProvider>
  )
}
