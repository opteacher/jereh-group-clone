import React, { useState, useEffect } from 'react'
import { Search, Globe, Menu, X, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const langDict = { en: 'English', zh: '中文' }

const Header: React.FC = () => {
  const { t, i18n } = useTranslation('common')

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')
  }

  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    {
      name: t('header.dispTitle'),
      dropDownItems: [
        'display.projects',
        'display.technology',
        'display.products',
        'display.dashboard'
      ]
    },
    { name: t('header.busnsTitle'), dropDownItems: ['business.em', 'business.gc', 'business.ru'] },
    { name: t('header.products'), dropDownItems: [] },
    { name: t('header.examples'), dropDownItems: [] },
    { name: t('header.news'), dropDownItems: [] },
    { name: t('header.organ'), dropDownItems: [] }
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md text-gray-800' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.location.reload()}>
            {/* Simple Logo Placeholder */}
            <img className="w-48" alt="Lanke" src="./logo.svg" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navItems.map(item => (
              <div key={item.name} className="group relative cursor-pointer">
                <span
                  className={`flex items-center text-sm font-medium uppercase tracking-wider hover:text-jereh-red transition-colors ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.name}
                  {item.dropDownItems.length !== 0 && <ChevronDown className="w-4 h-4 ml-1" />}
                </span>
                {/* Simplified Dropdown Hover Effect */}
                {item.dropDownItems.length !== 0 && (
                  <div className="absolute left-0 pt-2 hidden hover:block group-hover:block">
                    <div className="w-48 bg-white rounded-md shadow-lg py-2">
                      {item.dropDownItems.map(item => (
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-jereh-red"
                        >
                          {t(`header.${item}`)}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <Search className={`w-5 h-5 cursor-pointer hover:text-jereh-red transition-colors`} />
            <div
              className="flex items-center space-x-1 cursor-pointer hover:text-jereh-red transition-colors"
              onClick={changeLanguage}
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">{langDict[i18n.language]}</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-gray-900 absolute top-20 left-0 w-full shadow-lg border-t">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map(item => (
              <a
                key={item.name}
                href="#"
                className="block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-50 hover:text-jereh-red"
              >
                {item.name}
              </a>
            ))}
            <div className="border-t pt-4 mt-4 flex items-center justify-between px-3">
              <span className="flex items-center gap-2">
                <Globe className="w-5 h-5" /> Global (EN)
              </span>
              <Search className="w-5 h-5" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
