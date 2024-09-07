import Link from 'next/link'
import Button from '../UI/Button'
import Card from '../UI/Card'

import classes from './Header.module.css'
import { FaSun } from 'react-icons/fa'
const Header = () => {
  return (
    <header className={classes.container}>
      <Card>
        <nav className={classes.navigation}>
          <div className={classes.logo}>
            <p>KAD Token</p>
          </div>
          <div className={classes.middle}>
            <Button>EN</Button>
            <FaSun />
          </div>
          <div className={classes['connect-btn']}>
            <Button>Connect Wallet</Button>
          </div>
        </nav>
      </Card>
    </header>
  )
}

export default Header
