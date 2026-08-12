import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('qb_lang') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('qb_lang', lang)
  }, [lang])

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'am' : 'en'))
  }

  const t = (path) => {
    const keys = path.split('.')
    let result = translations[lang]
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key]
      } else {
        // Fallback to English if translation key missing
        let fallback = translations['en']
        for (const k of keys) {
          if (fallback && fallback[k] !== undefined) {
            fallback = fallback[k]
          } else {
            return path
          }
        }
        return fallback
      }
    }
    return result
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
