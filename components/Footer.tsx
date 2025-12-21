import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('common')
  
  return (
    <footer className="bg-jereh-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-jereh-red text-white flex items-center justify-center font-bold text-lg rounded">L</div>
                <span className="text-2xl font-bold">Lanke</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t("footer.introduction.content")}
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t("footer.quickLinks.label")}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-jereh-red transition-colors">{t("footer.quickLinks.aboutUs")}</a></li>
              <li><a href="#" className="hover:text-jereh-red transition-colors">{t("footer.quickLinks.solutions")}</a></li>
              <li><a href="#" className="hover:text-jereh-red transition-colors">{t("footer.quickLinks.products")}</a></li>
              <li><a href="#" className="hover:text-jereh-red transition-colors">{t("footer.quickLinks.investorRelations")}</a></li>
              <li><a href="#" className="hover:text-jereh-red transition-colors">{t("footer.quickLinks.esg")}</a></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t("footer.industries.label")}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-jereh-red transition-colors">{t("footer.industries.oilGas")}</a></li>
              <li><a href="#" className="hover:text-jereh-red transition-colors">{t("footer.industries.power")}</a></li>
              <li><a href="#" className="hover:text-jereh-red transition-colors">{t("footer.industries.envMgn")}</a></li>
              <li><a href="#" className="hover:text-jereh-red transition-colors">{t("footer.industries.newEnergy")}</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t("footer.contactUs.label")}</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-jereh-red" />
                <span>{t("footer.contactUs.address")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-jereh-red" />
                <span>+86-535-672-3000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-jereh-red" />
                <span>contact@lanke.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Lanke Group. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;