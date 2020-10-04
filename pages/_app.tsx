import * as React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import styled from '@emotion/styled'
import customColors from '../utils/theme'

import AppProvider from '~/components/AppProvider'
import TopNavigation from '~/components/Layout/TopNavigation'

export default function CustomAppPage({ Component, pageProps, router }: AppProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''

  const TopNavigationShellFallback = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: ${customColors.colors.gray08};
    z-index: 0;
  `
  return (
    <AppProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <TopNavigation title="ReactJS ID" />
      <TopNavigationShellFallback />

      <Component {...pageProps} />
    </AppProvider>
  )
}
