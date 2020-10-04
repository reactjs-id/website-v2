import * as React from 'react'
import Link from 'next/link'
import Logo from '../ui/Logo'
import style from './TopNavigation.module.css'

const TopNavigation: React.FC = () => (
  <nav className={style.root}>
    <ul className={style.Inner}>
      <li className={style.BrandLogo}>
        <Link href="/">
          <Logo height="40" fill="#fff" />
        </Link>
      </li>
      <li className={style.MenuItem}>
        <Link href="/community">Komunitas</Link>
      </li>
      <li className={style.MenuItem}>
        <Link href="/submit-a-talk">Ajukan Topik</Link>
      </li>
      <li className={style.MenuItem}>
        <Link href="/faq">FAQ</Link>
      </li>
    </ul>
  </nav>
)

export default TopNavigation
