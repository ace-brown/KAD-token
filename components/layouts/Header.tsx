import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import Button from '../UI/Button'
import Card from '../UI/Card'
import logo from '@/assets/logo-no-background.svg'
import classes from './Header.module.css'
import ThemeToggle from './ThemeToggle'
import LanguageSelector from './LanguageSelector'

const Header = () => {
  const { t } = useTranslation()

  return (
    <Card className={classes.container}>
      <nav className={classes.navigation}>
        <div className={classes.logo}>
          <Image src={logo} alt="KAD Token" width={60} height={60} />
        </div>
        <div className={classes['connect-btn']}>
          <LanguageSelector />
          <ThemeToggle />
          <Button>{t('connect')}</Button>
        </div>
      </nav>
    </Card>
  )
}

export default Header
