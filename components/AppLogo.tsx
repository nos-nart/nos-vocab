import React from "react";
import { motion } from 'framer-motion';

export const AppLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="30" height="30" rx="15" fill="#FFD663" />
    <motion.path
      initial={{ scale: 0.7 }}
      animate={{ scale: 1.1, transition: { duration: 0.7, repeat: Infinity, repeatType: 'reverse', ease: [0.17, 0.67, 0.83, 0.67] } }}
      d="M13.4198 7.85511C14.1866 10.717 11.5746 13.5259 8.86671 15.9769C5.29608 15.2082 1.62958 14.0817 0.86273 11.2198C0.454142 9.69488 0.856162 7.77059 3.13926 7.15884C5.42236 6.54708 6.85367 8.46418 6.85367 8.46418C6.85367 8.46418 7.13468 6.08827 9.41778 5.47651C11.7009 4.86476 13.0615 6.51801 13.4198 7.85511Z"
      fill="#FF759B" />
    <motion.path
      initial={{ scale: 0.7 }}
      animate={{ scale: 1.1, transition: { duration: 0.7, repeat: Infinity, repeatType: 'reverse', ease: [0.17, 0.67, 0.83, 0.67], delay: 0.7 } }}
      d="M18.7255 7.85511C17.9586 10.717 20.5707 13.5259 23.2786 15.9769C26.8492 15.2082 30.5157 14.0817 31.2825 11.2198C31.6911 9.69488 31.2891 7.77059 29.006 7.15884C26.7229 6.54708 25.2916 8.46418 25.2916 8.46418C25.2916 8.46418 25.0106 6.08827 22.7275 5.47651C20.4444 4.86476 19.0838 6.51801 18.7255 7.85511Z"
      fill="#FF759B" />
    <circle cx="7.5" cy="19.5" r="2.5" fill="#FF759B" fill-opacity="0.2" />
    <circle cx="24.5" cy="19.5" r="2.5" fill="#FF759B" fill-opacity="0.2" />
    <path d="M16 24C18.2091 24 20 22.2091 20 20V16H12V20C12 22.2091 13.7909 24 16 24Z" fill="#810024" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M12.535 22C13.2267 20.8044 14.5193 20 15.9999 20C17.4805 20 18.7732 20.8044 19.4648 22C18.7732 23.1956 17.4805 24 15.9999 24C14.5193 24 13.2267 23.1956 12.535 22Z"
      fill="#FF759B" />
    <path d="M13 16H19V17C19 17.5523 18.5523 18 18 18H14C13.4477 18 13 17.5523 13 17V16Z" fill="white" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M1.07406 14.5C1.02508 14.9934 1 15.4938 1 16C1 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16C31 15.4937 30.9749 14.9934 30.9259 14.5C30.1733 22.08 23.778 28 16 28C8.22198 28 1.82665 22.08 1.07406 14.5Z"
      fill="#FFD04C" />
  </svg>

  )