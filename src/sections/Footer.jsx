import React from 'react';
import { socialImgs } from '../constants';
import AnimatedSignature from '../components/AnimatedSignature';

const Footer = () => {
  return (
    <footer className="footer relative">
      <div className="footer-container border-t border-white/10 pt-10 pb-8">
        {/* Left Section - Terms & Policies */}
        <div className="flex flex-col gap-2">
          <p className="text-white-50 font-medium">Terms & Conditions</p>
          <p className="text-blue-50 text-sm hover:text-purple-300 transition-colors cursor-pointer">Privacy Policy</p>
          <p className="text-blue-50 text-sm hover:text-purple-300 transition-colors cursor-pointer">Cookie Policy</p>
        </div>

        {/* Center Section - Social Media Links */}
        <div className="socials">
          {socialImgs.map((social) => (
            <a
              key={social.name}
              href={social.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="icon hover:border-purple-500/60 hover:shadow-[0_0_15px_rgba(192,132,252,0.4)] transition-all"
            >
              <img src={social.imgPath} alt={social.name} className="size-5 object-contain" />
            </a>
          ))}
        </div>

        {/* Right Section - Signature directly above Alfiya Khan */}
        <div className="flex flex-col gap-2 items-center md:items-end">
          {/* Animated Calligraphy Signature above Alfiya Khan */}
          <AnimatedSignature />

          <p className="text-white-50 flex items-center gap-1.5 flex-wrap justify-center md:justify-end">
            © {new Date().getFullYear()}{' '}
            <span className="font-display font-bold text-white">Alfiya Khan</span>{' '}
            <span className="text-purple-400">·</span>{' '}
            <span className="font-calligraphy text-lg text-fuchsia-300">handcrafted with passion</span>
          </p>
          <p className="text-blue-50 text-xs font-tech tracking-wider uppercase">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
