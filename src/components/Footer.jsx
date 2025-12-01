import AppIcon from "../assets/x.png";
import LinkedinIcon from "../assets/linkedin.png";
import MessageIcon from "../assets/message.png";
import FacebookIcon from "../assets/facebook.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-600 via-orange-500 to-red-500 text-white pt-14">
      <div className="w-11/12 mx-auto">
        <div className="grid md:grid-cols-4 gap-10">

          {/* About */}
          <div className="space-y-4 max-w-sm">
            <Link to="/" className="flex gap-2 items-center">
              <img className="h-[45px] w-[45px]" src={logo} alt="Logo" />
              <h1 className="text-2xl font-bold tracking-wide">WarmPaws</h1>
            </Link>
            <p className="text-sm text-white/90 leading-relaxed">
              WarmPaws helps you take care of your pets in winter with tips,
              winter clothing, grooming & professional services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-white/90">
              <li>
                <Link to="/" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-white">My Profile</Link>
              </li>
            </ul>
          </div>

          {/* Info / Legal */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Info</h4>
            <ul className="space-y-2 text-white/90">
              <li>
                <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <img src={FacebookIcon} className="h-5 w-5" alt="Facebook" /> Facebook
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <img src={LinkedinIcon} className="h-5 w-5" alt="LinkedIn" /> LinkedIn
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <img src={MessageIcon} className="h-5 w-5" alt="Email" /> support@warmpaws.com
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <img src={AppIcon} className="h-5 w-5" alt="App" /> @WarmPaws
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/30 mt-10" />

        {/* Bottom */}
        <div className="text-center py-6 text-white/90 text-sm">
          © {new Date().getFullYear()} WarmPaws. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
