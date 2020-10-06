import * as React from 'react'
import Head from 'next/head'

import styles from './Page.module.css'
import Footer from './layout/Footer'

interface PageProps {
  title?: string
}

const Page: React.FC<PageProps> = ({ children, title }) => (
  <div className={styles.root}>
    <Head>
      <title>{title || 'Next.js TypeScript Quickstart'}</title>
    </Head>
    {children}
    <Footer />
  </div>
)

export default Page
