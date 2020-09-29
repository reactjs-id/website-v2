import * as React from 'react'

import styles from './PageBody.module.css'

const PageBody: React.FC = ({ children }) => {
  return <section className={styles.root}>{children}</section>
}

export default PageBody
