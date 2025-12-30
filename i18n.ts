import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
  .use(Backend) // 懒加载翻译文件
  .use(LanguageDetector) // 自动检测语言
  .use(initReactI18next) // 传递i18n实例到react-i18next
  .init({
    fallbackLng: 'en', // 默认语言
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false // React已经转义
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage']
    },
    backend: {
      loadPath: `.${
        process.env.NODE_ENV === 'development' ? '/lankesite-demo' : ''
      }/locales/{{lng}}/{{ns}}.json` // 翻译文件路径
    }
  })

export default i18n
