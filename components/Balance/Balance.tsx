import React, { useState } from 'react'
import Identicon from 'react-identicons'

import classes from './/Balance.module.css'
import Card from '../UI/Card'

const Balance = ({ balance }: { balance: number }) => {
  return (
    <Card className={classes.balance}>
      <h1>Token Balance</h1>
      <div className={classes.icon}>
        <div className={classes.identicon}>
          <Identicon string="random-string" size={40} />
        </div>
        <p>{balance} KAD Tokens</p>
      </div>
    </Card>
  )
}

export default Balance
