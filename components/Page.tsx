import * as React from 'react'
import { NextSeo } from 'next-seo'

import styles from './Page.module.css'

interface PageProps {
  title?: string
}

const Page: React.FC<PageProps> = ({ children, title }) => (
  <div className={styles.root}>
    <NextSeo title={title || ''} />
    {children}
  </div>
)

export default Page
