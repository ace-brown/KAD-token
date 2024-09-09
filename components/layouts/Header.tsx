import Image from 'next/image'
import { FaSun } from 'react-icons/fa'

import Button from '../UI/Button'
import Card from '../UI/Card'
import logo from '@/assets/logo-no-background.svg'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.container}>
      <Card>
        <nav className={classes.navigation}>
          <div className={classes.logo}>
            <Image src={logo} alt="KAD Token" width={70} height={70} />
          </div>
          <div className={classes['connect-btn']}>
            <h3>EN</h3>
            <FaSun />
            <Button>Connect Wallet</Button>
          </div>
        </nav>
      </Card>
    </header>
  )
}

export default Header
