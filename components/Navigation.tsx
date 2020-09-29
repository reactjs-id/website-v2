import * as React from 'react'
import Link from 'next/link'

import styles from './Navigation.module.css'

const Navigation: React.FC = () => (
  <header className={styles.root}>
    <div className={styles.left}>▲</div>
    <nav className={styles.right}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  </header>
)

export default Navigation
