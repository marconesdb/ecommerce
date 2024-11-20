import { Mail, Phone } from 'lucide-react';
import iconPlayStore from '../../assets/icons/google-play-button.svg'
import iconApp from '../../assets/icons/apple-store-button.svg'
import iconFacebook from '../../assets/icons/Facebook.svg'
import iconX from '../../assets/icons/X.svg'
import iconInstagram from '../../assets/icons/Instagram.svg'
import iconLinkedin from '../../assets/icons/Linkedin.svg'
import iconVisa from '../../assets/icons/Visa.svg'
import iconMastercard from '../../assets/icons/Mastercard.svg'
import iconPaypal from '../../assets/icons/Paypal.svg'
import iconSkrill from '../../assets/icons/Skrill.svg'
import iconKlarna from '../../assets/icons/Klarna.svg'




const Footer = () => {
  return (
    <footer className="w-full bg-customGrayy pt-8 pb-4">
      {/* Newsletter Section */}
      <div className="w-full px-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-400 pb-8">
          <div className="max-w-md">
            <h3 className="text-xl font-semibold mb-2">Join our newsletter for £10 offs</h3>
            <p className="text-gray-600 text-sm">Register now to get latest updates on promotions & coupons. Don't worry, we not spam!</p>
          </div>


           <div className="w-full md:w-auto">
            <div className="flex flex-col sm:flex-row gap-2 items-center border rounded-md bg-white">
            <Mail className="text-gray-400  w-5 h-5  ml-4 " />
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2  rounded-md flex-grow "
                
              />
              <button className="px-6 py-2 bg-purple-600 text-white border-t border-b border-r rounded-tr-lg rounded-br-lg hover:bg-purple-700 font-bold">
              SEND
            </button>

            </div>
            <p className="text-xs text-gray-500 mt-2">
              By subscribing you agree to our <span className='text-purple-600 font-semibold cursor-pointer'> Terms & Conditions and Privacy & Cookies Policy.</span>
            </p>
          </div>



          
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-b border-gray-400 pb-8">
          {/* Help Section */}
          <div>
            <h4 className="font-semibold mb-4">Do You Need Help?</h4>
            <p className="text-sm text-gray-600 mb-4">Autoseligen syr. Nek diarask fröbomba. Nörantipol kynoda nynat. Pressa fåmoska.</p>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Phone className="w-5 h-5" />
              <div>
                <p className='text-gray-600 text-sm'>Monday-Friday: 08am-9pm</p>
                <span className="font-semibold text-[20px]">0 800 300-353</span>

              </div>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="text-sm w-5 h-5" />
              <div>
                <p className='text-sm text-gray-600'>Need help with your order?</p>
                <span className="text-sm font-semibold ">info@example.com</span>
              </div>
            </div>
          </div>

          </div>

          {/* Make Money Section */}
          <div>
            <h4 className="font-semibold mb-4">Make Money with Us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className='hover:text-purple-600 cursor-pointer'>Sell on Grogin</li>
              <li className='hover:text-purple-600 cursor-pointer'>Sell Your Services on Grogin</li>
              <li className='hover:text-purple-600 cursor-pointer'>Sell on Grogin Business</li>
              <li className='hover:text-purple-600 cursor-pointer'>Sell Your Apps on Grogin</li>
              <li className='hover:text-purple-600 cursor-pointer'>Become an Affiliate</li>
              <li className='hover:text-purple-600 cursor-pointer'>Advertise Your Products</li>
              <li className='hover:text-purple-600 cursor-pointer'>Self-Publish with Us</li>
              <li className='hover:text-purple-600 cursor-pointer'>Become an Blowwe Vendor</li>
            </ul>
          </div>

          {/* Let Us Help Section */}
          <div>
            <h4 className="font-semibold mb-4">Let Us Help You</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className='hover:text-purple-600 cursor-pointer'>Accessibility Statement</li>
              <li className='hover:text-purple-600 cursor-pointer'>Your Orders</li>
              <li className='hover:text-purple-600 cursor-pointer'>Returns & Replacements</li>
              <li className='hover:text-purple-600 cursor-pointer'>Shipping Rates & Policies</li>
              <li className='hover:text-purple-600 cursor-pointer'>Refund and Returns Policy</li>
              <li className='hover:text-purple-600 cursor-pointer'>Privacy Policy</li>
              <li className='hover:text-purple-600 cursor-pointer'>Terms and Conditions</li>
              <li className='hover:text-purple-600 cursor-pointer'>Cookie Settings</li>
              <li className='hover:text-purple-600 cursor-pointer'>Help Center</li>
            </ul>
          </div>

          {/* Get to Know Us Section */}
          <div>
            <h4 className="font-semibold mb-4">Get to Know Us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className='hover:text-purple-600 cursor-pointer'>Careers for Grogin</li>
              <li className='hover:text-purple-600 cursor-pointer'>About Grogin</li>
              <li className='hover:text-purple-600 cursor-pointer'>Investor Relations</li>
              <li className='hover:text-purple-600 cursor-pointer'>Grogin Devices</li>
              <li className='hover:text-purple-600 cursor-pointer'>Customer reviews</li>
              <li className='hover:text-purple-600 cursor-pointer'>Social Responsibility</li>
              <li className='hover:text-purple-600 cursor-pointer'>Store Locations</li>
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h4 className="font-semibold mb-4">Download our app</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <img src={iconPlayStore} className="h-12" />
                <span className="text-xs">Download App Get -10% discount</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={iconApp} alt="App Store" className="h-12" />
                <span className="text-xs">Download App Get -20% discount</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm font-semibold mb-3">Follow us on social media:</p>
              <div className="flex gap-3">
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <div className="w-8 h-8  flex items-center justify-center"> <img src={iconFacebook} alt="Facebook" className="h-6" /></div>
                </a>
                <a href="#" className="text-black hover:text-gray-800">
                  <div className="w-8 h-8  flex items-center justify-center"><img src={iconX} alt="X" className="h-6" /></div>
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-700">
                  <div className="w-8 h-8   flex items-center justify-center"><img src={iconInstagram} alt="Instagram" className="h-6" /></div>
                </a>
                <a href="#" className="text-blue-800 hover:text-blue-900">
                  <div className="w-8 h-8   flex items-center justify-center"><img src={iconLinkedin} alt="Linkedin" className="h-6" /></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
            {/* Texto de Copyright */}
            <div className="flex flex-col items-center md:items-start">
              <p className="text-sm text-gray-600 text-center md:text-left">
                Copyright 2024 © Jinstore WooCommerce WordPress Theme. All rights reserved. Powered by <span className='text-purple-600 font-semibold'><a href="https://layout-novo-portfolio.vercel.app/">✓ MSB</a></span>.
              </p>
              {/* Imagens */}
              <div className="flex gap-3 mt-3">
                <img src={iconVisa} alt="Visa" className="h-6" />
                <img src={iconMastercard} alt="Mastercard" className="h-6" />
                <img src={iconPaypal} alt="PayPal" className="h-6" />
                <img src={iconSkrill} alt="Skrill" className="h-6" />
                <img src={iconKlarna} alt="Klarna" className="h-6" />
              </div>
            </div>

            {/* Links de navegação */}
            <div className="flex gap-4 text-sm">
              <a href="#" className=" hover:text-gray-800 underline">
                Terms and Conditions
              </a>
              <a href="#" className=" hover:text-gray-800 underline">
                Privacy Policy
              </a>
              <a href="#" className=" hover:text-gray-800 underline">
                Order Tracking
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;