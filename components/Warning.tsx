import React from 'react'
import Card from './UI/Card'

import classes from './Warning.module.css'
import { useTranslation } from 'react-i18next'

const Warning = () => {
  const { t } = useTranslation()

  return (
    <Card className={classes.warning}>
      <h1>{t('danger')} !</h1>
      <h2>{t('demoEnv')}</h2>
      <p>{t('disclaimer')}</p>
    </Card>
  )
}

export default Warning
