import * as React from 'react'
import Link from 'next/link'
import Logo from '../Ui/Logo'
import customColors from '../../utils/theme'
import style from './TopNavigation.module.css'

interface TopNavigationProps {
  title: string
}

const TopNavigation: React.FC<TopNavigationProps> = ({ title }) => (
  <nav className={style.root}>
    <ul className={style.Inner}>
      <li className={style.BrandLogo}>
        <Link href="/">
          <Logo height="40" fill={customColors.colors.white} title={title} />
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
