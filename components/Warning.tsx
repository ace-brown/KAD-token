import React from 'react'
import Card from './UI/Card'

import classes from './Warning.module.css'
import { useTranslation } from 'react-i18next'

const Warning = () => {
  const { t } = useTranslation()
  const wahteer = t('Welcome to React')

  return (
    <Card className={classes.warning}>
      <h1> Danger !</h1>
      <h2> Demo Environment Only</h2>
      <p>
        Do not use real assets from the mainnet on this website. This website is for demonstration
        purposes only. The KAD Token has no value and should not be considered a real asset under
        any circumstances.
      </p>
      <p>{wahteer}</p>
    </Card>
  )
}

export default Warning
