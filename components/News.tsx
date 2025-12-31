import React, { useEffect } from 'react'
import { Calendar } from 'lucide-react'
import ScrollReveal from 'scrollreveal'
import { useTranslation } from 'react-i18next'
import News from '@/types/news'

const Newss: React.FC = () => {
  const { t } = useTranslation('home')
  const [newsItems, setNewsItems] = React.useState<News[]>([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/lanke/mdl/v1/news/s`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        setNewsItems(data.data)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error)
      })
      .finally(() => {
        if (import.meta.env.PROD) {
          setTimeout(() => {
            ScrollReveal().reveal('.news-card', { interval: 500, duration: 800, scale: 0.85 })
          }, 500)
        } else {
          ScrollReveal().reveal('.news-card', { interval: 500, duration: 800, scale: 0.85 })
        }
      })
  }, [])

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-jereh-red font-bold text-sm uppercase tracking-widest mb-3">
              {t("news.title")}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{t("news.latestUpdates")}</h3>
          </div>
          <a
            href="#"
            className="hidden md:block px-6 py-2 border border-gray-300 text-gray-700 font-medium hover:bg-jereh-red hover:text-white hover:border-jereh-red transition-all"
          >
            {t("news.viewAllNews")}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="news-card invisible group cursor-pointer">
              <div className="relative overflow-hidden rounded-md mb-6">
                <img
                  src={item.post}
                  alt={item.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-jereh-red text-white text-xs font-bold px-3 py-1 uppercase rounded-sm">
                  {item.category}
                </div>
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-3 space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{item.datetime.toString()}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-jereh-red transition-colors line-clamp-2">
                {item.title}
              </h4>
              <p className="mt-3 text-gray-600 line-clamp-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a
            href="#"
            className="inline-block px-8 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-jereh-red hover:text-white transition-all"
          >
            {t("news.viewAllNews")}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Newss
