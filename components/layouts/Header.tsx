import Image from 'next/image'

import Button from '../UI/Button'
import Card from '../UI/Card'
import logo from '@/assets/logo-no-background.svg'
import classes from './Header.module.css'
import ThemeToggle from './ThemeToggle'
import LanguageSelector from './LanguageSelector'

const Header = () => {
  return (
    <Card className={classes.container}>
      <nav className={classes.navigation}>
        <div className={classes.logo}>
          <Image src={logo} alt="KAD Token" width={60} height={60} />
        </div>
        <div className={classes['connect-btn']}>
          <LanguageSelector />
          <ThemeToggle />
          <Button>Connect Wallet</Button>
        </div>
      </nav>
    </Card>
  )
}

export default Header
