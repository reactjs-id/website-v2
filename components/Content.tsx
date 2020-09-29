import * as React from 'react'

import styles from './Content.module.css'

const Content: React.FC = ({ children }) => {
  return <main className={styles.root}>{children}</main>
}

export default Content
