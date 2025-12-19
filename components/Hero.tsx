import React from 'react'
import { ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Hero: React.FC = () => {
  const { t } = useTranslation('home')

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Industrial Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-in-up">
          <h2 className="text-jereh-red font-bold text-lg tracking-widest uppercase mb-4">
            {t('hero.advSlogan')}
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            <div dangerouslySetInnerHTML={{ __html: t('hero.title') }} />
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-jereh-red text-white font-semibold text-lg hover:bg-[#1279becd] transition-all rounded-sm flex items-center gap-2">
              {t('hero.solutionsButton')} <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-white text-white font-semibold text-lg hover:bg-white hover:text-black transition-all rounded-sm">
              {t('hero.watchVideoButton')}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
