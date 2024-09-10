import React, { useState } from 'react'
import Identicon from 'react-identicons'

import classes from './/Balance.module.css'
import Card from '../UI/Card'
import { useTranslation } from 'react-i18next'

const Balance = ({ balance }: { balance: number }) => {
  const { t } = useTranslation()

  return (
    <Card className={classes.balance}>
      <div className={classes.identicon}>
        <Identicon string="random-string" size={40} />
      </div>
      <div className={classes.current}>
        <h1>{t('currentBalance')}</h1>
        <p>{balance} KAD Tokens</p>
      </div>
    </Card>
  )
}

export default Balance
