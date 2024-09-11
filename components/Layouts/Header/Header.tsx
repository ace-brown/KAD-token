import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

import logo from '@/assets/logo-no-background.svg'
import LanguageSelector from './LanguageSelector'
import Button from '../../UI/Button'
import Card from '../../UI/Card'
import ThemeToggle from './ThemeToggle'
import classes from './Header.module.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

const Header = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { t } = useTranslation()
  const connectBtnStyle = {
    background: '#c6ad53',
    color: '#eaeaea',
    borderRadius: '8px',
    padding: '8px 10px',
    fontWeight: '500',
    fontSize: '16px',
    width: 'fit-content',
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <Card className={classes.container}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <Image src={logo} alt="KAD Token" width={60} height={60} />
        </div>
        <nav className={classes['nav']}>
          <LanguageSelector />
          <ThemeToggle />
          <WalletMultiButton style={connectBtnStyle} />
          {/* <Button>{t('connect')}</Button> */}
        </nav>
      </div>
    </Card>
  )
}

export default Header
