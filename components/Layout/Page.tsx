import * as React from 'react'
import { NextSeo } from 'next-seo'

import AppRoot from './AppRoot'

interface PageProps {
  title?: string
}

const Page: React.FC<PageProps> = ({ children, title }) => (
  <AppRoot>
    <NextSeo title={title || ''} />
    {children}
  </AppRoot>
)

export default Page
