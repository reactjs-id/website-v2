import * as React from 'react'
import { NextSeo } from 'next-seo'

import TopNavigation from './TopNavigation'
import AppRoot from './AppRoot'
import Footer from './Footer'

interface PageProps {
  title?: string
}

const Page: React.FC<PageProps> = ({ children, title }) => (
  <AppRoot>
    <NextSeo title={title || ''} />
    <TopNavigation title={title || ''} />
    {children}
    <Footer />
  </AppRoot>
)

export default Page
