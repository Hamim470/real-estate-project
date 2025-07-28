import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { SiZillow, SiAppstore, SiGoogleplay } from 'react-icons/si';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-10 px-6 md:px-20 text-sm">
      <div className="grid md:grid-cols-4 gap-6 border-b pb-6 border-gray-300">
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="space-y-1">
            <li>About</li>
            <li>Zestimates</li>
            <li>Research</li>
            <li>Careers</li>
            <li>Careers - U.S. Privacy Notice</li>
            <li>Careers - Mexico Privacy Notice</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Support</h3>
          <ul className="space-y-1">
            <li>Help</li>
            <li>Advertise</li>
            <li>Fair Housing Guide</li>
            <li>Advocacy</li>
            <li>Terms of Use</li>
            <li>Privacy Notice</li>
            <li>Cookie Preference</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Explore</h3>
          <ul className="space-y-1">
            <li>Learn</li>
            <li>AI</li>
            <li>Mobile Apps</li>
            <li>Trulia</li>
            <li>StreetEasy</li>
            <li>HotPads</li>
            <li>Out East</li>
            <li>ShowingTime+</li>
            <li className="text-red-600">Do Not Sell or Share My Personal Info →</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Accessibility & Legal</h3>
          <p className="mb-2">
            HomeTrackByBhiks Group is committed to ensuring digital accessibility. Feedback and accommodation requests are welcome.
          </p>
          <p className="mb-1">HomeTrackByBhiks, Inc. holds real estate licenses in multiple states and provinces.</p>
          <ul className="space-y-1">
            <li>§ 442-H NY Operating Procedures</li>
            <li>§ NY Fair Housing Notice</li>
            <li>TREC: Brokerage Services & Consumer Notice</li>
            <li>California DRE #1522444</li>
            <li>Contact HomeTrackByBhiks, Inc. Brokerage</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
        <div className="flex items-center space-x-4 text-lg">
          <SiAppstore />
          <SiGoogleplay />
          <img className='h-6' src={logo} alt="" />        </div>
        <div className="flex items-center space-x-4 text-xl text-gray-600">
          <FaFacebookF />
          <FaInstagram />
          <FaTiktok />
        </div>
      </div>

      <div className="text-center mt-6 text-xs text-gray-500">
        © 2024–2025 HomeTrackByBhiks. All rights reserved. Equal Housing Opportunity.
      </div>
    </footer>
  );
};

export default Footer;
