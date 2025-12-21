import React, { useEffect } from 'react'
import { ArrowRight, Settings, Droplets, Zap, Truck, Leaf, Anchor } from 'lucide-react'
import ScrollReveal from 'scrollreveal'
import { useTranslation } from 'react-i18next'

const solutions = [
  {
    title: 'Oil & Gas',
    description:
      'Providing efficient equipment and engineering services for oil & gas exploration and development.',
    icon: <Droplets className="w-10 h-10" />,
    image: 'https://picsum.photos/600/400?random=1'
  },
  {
    title: 'Environmental',
    description:
      'Offering comprehensive environmental management solutions for sludge, soil remediation, and more.',
    icon: <Leaf className="w-10 h-10" />,
    image: 'https://picsum.photos/600/400?random=2'
  },
  {
    title: 'Power Services',
    description:
      'Customized power solutions ensuring reliable energy supply across various demanding scenarios.',
    icon: <Zap className="w-10 h-10" />,
    image: 'https://picsum.photos/600/400?random=3'
  },
  {
    title: 'Equipment',
    description:
      'High-end equipment manufacturing including fracturing units, coiled tubing units, and cementing units.',
    icon: <Truck className="w-10 h-10" />,
    image: 'https://picsum.photos/600/400?random=4'
  },
  {
    title: 'Offshore',
    description:
      'Engineering and module fabrication services for offshore oil and gas production facilities.',
    icon: <Anchor className="w-10 h-10" />,
    image: 'https://picsum.photos/600/400?random=5'
  },
  {
    title: 'Technical Services',
    description:
      'Full lifecycle technical support and operation maintenance services for global clients.',
    icon: <Settings className="w-10 h-10" />,
    image: 'https://picsum.photos/600/400?random=6'
  }
]

const Solutions: React.FC = () => {
  const { t } = useTranslation('home')

  useEffect(() => {
    ScrollReveal().reveal('.solution-card', { interval: 500, duration: 800, scale: 0.85 })
  })

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-jereh-red font-bold text-sm uppercase tracking-widest mb-3">
            {t("solutions.subTitle")}
          </h2>
          <h3 className="text-4xl font-bold text-gray-900">{t("solutions.title")}</h3>
          <div className="w-24 h-1 bg-jereh-red mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="solution-card invisible group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-jereh-red mb-4 group-hover:scale-110 transition-transform origin-left duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-jereh-red transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">{item.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <a
                    href="#"
                    className="text-sm font-bold text-gray-900 uppercase tracking-wide flex items-center gap-2 group-hover:text-jereh-red transition-colors"
                  >
                    View Details{' '}
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
