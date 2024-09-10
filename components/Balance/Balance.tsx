import React, { useState } from 'react'
import Identicon from 'react-identicons'

import classes from './/Balance.module.css'
import Card from '../UI/Card'

const Balance = ({ balance }: { balance: number }) => {
  return (
    <Card className={classes.balance}>
      <div className={classes.identicon}>
        <Identicon string="random-string" size={40} />
      </div>
      <div className={classes.current}>
        <h1>Current Balance</h1>
        <p>{balance} KAD Tokens</p>
      </div>
    </Card>
  )
}

export default Balance
