import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import classes from './LanguageSelector.module.css'

const languages = [
  { code: 'en', lang: 'English' },
  { code: 'de', lang: 'Deutsch' },
  { code: 'fr', lang: 'Français' },
  { code: 'es', lang: 'Español' },
  { code: 'ru', lang: 'Русский' },
  { code: 'pt', lang: 'Português' },
  { code: 'it', lang: 'Italiano' },
  { code: 'nl', lang: 'Nederlands' },
  { code: 'ro', lang: 'Română' },
  { code: 'zh', lang: '中文' },
  { code: 'ja', lang: '日本語' },
]

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.body.dir = i18n.dir()
  }, [i18n, i18n.language])

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className={classes['btn-container']}>
      {languages.map((lng) => {
        return (
          <button
            className={lng.code === i18n.language ? 'selected' : ''}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        )
      })}
    </div>
  )

  //   return (
  //     <div>
  //          {languages.map((lng) => {
  //       <select name="language" id="language">
  //         <option value="en"> {lng.lang}</option>
  //         <option value="de"> {lng.lang}</option>
  //       </select>
  //           })}
  //     </div>
  //   )
}

export default LanguageSelector
