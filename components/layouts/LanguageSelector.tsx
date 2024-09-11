import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import classes from './LanguageSelector.module.css'

const languages = [
  { code: 'en', lang: 'English' },
  { code: 'de', lang: 'Deutsch' },
  { code: 'fr', lang: 'Français' },
  { code: 'es', lang: 'Español' },
  { code: 'ru', lang: 'Русский' },
  { code: 'it', lang: 'Italiano' },
  { code: 'ro', lang: 'Română' },
  { code: 'zh', lang: '中文' },
  { code: 'ja', lang: '日本語' },
]

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.body.dir = i18n.dir()
  }, [i18n, i18n.language])

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className={classes['select-container']}>
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className={classes.select}
      >
        {languages.map((lng) => (
          <option key={lng.code} value={lng.code}>
            {lng.lang}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSelector
