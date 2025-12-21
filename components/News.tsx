import React, { useEffect } from 'react'
import { Calendar } from 'lucide-react'
import ScrollReveal from 'scrollreveal'
import { useTranslation } from 'react-i18next'

const newsItems = [
  {
    date: 'Oct 24, 2023',
    title: 'Jereh Unveils GreenWell Distributed Hazardous Waste Treatment Solution',
    category: 'Products',
    image: 'https://picsum.photos/400/250?random=10'
  },
  {
    date: 'Sep 15, 2023',
    title: 'Jereh Group Shines at ADIPEC 2023 with Low-Carbon Solutions',
    category: 'Exhibitions',
    image: 'https://picsum.photos/400/250?random=11'
  },
  {
    date: 'Aug 02, 2023',
    title: 'Jereh Successfully Delivers New Batch of CTUs to Middle East',
    category: 'Projects',
    image: 'https://picsum.photos/400/250?random=12'
  }
]

const News: React.FC = () => {
  const { t } = useTranslation('home')
  
  useEffect(() => {
    ScrollReveal().reveal('.news-card', { interval: 500, duration: 800, scale: 0.85 })
  })

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
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-jereh-red text-white text-xs font-bold px-3 py-1 uppercase rounded-sm">
                  {item.category}
                </div>
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-3 space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{item.date}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-jereh-red transition-colors line-clamp-2">
                {item.title}
              </h4>
              <p className="mt-3 text-gray-600 line-clamp-3">
                Read more about how Jereh is leading the industry with innovative solutions and
                successful project deliveries globally.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a
            href="#"
            className="inline-block px-8 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-jereh-red hover:text-white transition-all"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  )
}

export default News
