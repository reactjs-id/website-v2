import * as React from 'react'
import Head from 'next/head'

import styles from './Page.module.css'

interface PageProps {
  title?: string
}

const Page: React.FC<PageProps> = ({ children, title }) => (
  <div className={styles.root}>
    <Head>
      <title>{title || 'Next.js TypeScript Quickstart'}</title>
    </Head>
    {children}
  </div>
)

export default Page
