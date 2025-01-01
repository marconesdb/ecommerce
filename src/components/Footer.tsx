import { Mail, Phone } from 'lucide-react';
import iconPlayStore from '../assets/icons/google-play-button.svg'
import iconApp from '../assets/icons/apple-store-button.svg'
import iconFacebook from '../assets/icons/Facebook.svg'
import iconX from '../assets/icons/X.svg'
import iconInstagram from '../assets/icons/Instagram.svg'
import iconLinkedin from '../assets/icons/Linkedin.svg'
import iconVisa from '../assets/icons/Visa.svg'
import iconMastercard from '../assets/icons/Mastercard.svg'
import iconPaypal from '../assets/icons/Paypal.svg'
import iconSkrill from '../assets/icons/Skrill.svg'
import iconKlarna from '../assets/icons/Klarna.svg'

const Footer = () => {
  return (
    <footer className="w-full bg-customGrayy px-4 sm:px-8 pt-8 pb-4">
      {/* Newsletter Section */}
      <div className=" mx-auto mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-gray-400 pb-8">
          <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Join our newsletter for £10 offs</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Register now to get latest updates on promotions & <br/>coupons. Don't worry, we not spam!</p>
          </div>

          <div className="w-full md:w-1/2 max-w-md">
            <div className="flex flex-col sm:flex-row items-center border rounded-md bg-white">
              <Mail className="text-gray-400 w-5 h-5 ml-4 hidden sm:block" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button className="w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700 font-bold transition duration-300">
                SEND
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center md:text-left">
              By subscribing you agree to our <span className='text-purple-600 font-semibold cursor-pointer hover:text-gray-600'> Terms & Conditions and Privacy & Cookies Policy.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 border-b border-gray-400 pb-8">
          {/* Help Section */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Do You Need Help?</h4>
            <p className="text-xs text-gray-600 mb-4 line-clamp-3">Autoseligen syr. Nek diarask fröbomba. Nörantipol kynoda nynat. Pressa fåmoska.</p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mb-2 sm:mb-0 text-gray-600" />
                <div className="text-center sm:text-left">
                  <p className='text-gray-600 text-xs'>Monday-Friday: 08am-9pm</p>
                  <span className="font-semibold text-sm sm:text-base">0 800 300-353</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mb-2 sm:mb-0 text-gray-600" />
                <div className="text-center sm:text-left">
                  <p className='text-xs text-gray-600'>Need help with your order?</p>
                  <span className="text-xs sm:text-sm font-semibold">info@example.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Other sections remain similar, with slight responsiveness tweaks */}
          {['Make Money with Us', 'Let Us Help You', 'Get to Know Us'].map((sectionTitle, index) => (
            <div key={sectionTitle} className="text-center sm:text-left">
              <h4 className="font-semibold mb-4 text-sm sm:text-base">{sectionTitle}</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                {getSectionLinks(index).map((item) => (
                  <li 
                    key={item} 
                    className='hover:text-purple-600 cursor-pointer transition duration-300'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Download App Section */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Download our app</h4>
            <div className="space-y-3">
              {[
                { icon: iconPlayStore, text: 'Download App Get -10% discount' },
                { icon: iconApp, text: 'Download App Get -20% discount' }
              ].map(({ icon, text }) => (
                <div key={text} className="flex flex-col sm:flex-row items-center gap-2 justify-center sm:justify-start">
                  <img src={icon} className="h-8 sm:h-10" />
                  <span className="text-xs text-gray-700">{text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <p className="text-xs font-semibold mb-3">Follow us on social media:</p>
              <div className="flex justify-center sm:justify-start gap-3">
                {[
                  {icon: iconFacebook, alt: 'Facebook', color: 'text-blue-600'},
                  {icon: iconX, alt: 'X', color: 'text-black'},
                  {icon: iconInstagram, alt: 'Instagram', color: 'text-pink-600'},
                  {icon: iconLinkedin, alt: 'Linkedin', color: 'text-blue-800'}
                ].map((social) => (
                  <a 
                    key={social.alt} 
                    href="#" 
                    className={`${social.color} hover:opacity-70 transition duration-300`}
                  >
                    <div className="w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center">
                      <img src={social.icon} alt={social.alt} className="h-4 sm:h-6" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-xs text-gray-600 text-center md:text-left">
                Copyright 2024 © Jinstore WooCommerce WordPress Theme. All rights reserved. 
                Powered by <span className='text-purple-600 font-semibold'>
                  <a href="https://layout-novo-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">✓ MSB</a>
                </span>
              </p>
              <div className="flex gap-3 mt-3 justify-center md:justify-start">
                {[iconVisa, iconMastercard, iconPaypal, iconSkrill, iconKlarna].map((icon, index) => (
                  <img 
                    key={index} 
                    src={icon} 
                    alt={`Payment Method ${index + 1}`} 
                    className="h-4 sm:h-6" 
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-xs text-center">
              {['Terms and Conditions', 'Privacy Policy', 'Order Tracking'].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="hover:text-gray-800 underline transition duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper function with explicit type annotation
const getSectionLinks = (index: number): string[] => {
  const sections: string[][] = [
    ['Sell on Grogin', 'Sell Your Services on Grogin', 'Sell on Grogin Business', 
     'Sell Your Apps on Grogin', 'Become an Affiliate', 'Advertise Your Products', 
     'Self-Publish with Us', 'Become an Blowwe Vendor'],
    ['Accessibility Statement', 'Your Orders', 'Returns & Replacements', 
     'Shipping Rates & Policies', 'Refund and Returns Policy', 'Privacy Policy', 
     'Terms and Conditions', 'Cookie Settings', 'Help Center'],
    ['Careers for Grogin', 'About Grogin', 'Investor Relations', 
     'Grogin Devices', 'Customer reviews', 'Social Responsibility', 
     'Store Locations']
  ];
  return sections[index];
};

export default Footer;