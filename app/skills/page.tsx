'use client'

import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export default function Skills() {
  const { theme } = useTheme();

  return (
    <div className={` relative transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <div className="relative z-10">
        <Header />

        <main className="flex w-full max-w-7xl mx-auto py-10 px-6  md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-12 items-center w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-3xl lg:text-4xl font-bold text-center md:mb-8"
            >
              My Skills
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full max-w-4xl"
            >
              {/* Mobile Development */}
              <motion.div className={`p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/20 w-full sm:w-80% ${theme === 'dark' ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'
                }`}>
                <div className="flex items-center mb-4">
                  <span className="text-2xl md:mr-3">📱</span>
                  <h2 className="text-lg md:text-2xl font-semibold text-orange-500">Figma (Primary Design Tool)</h2>
                </div>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Adobe Photoshop

                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Adobe Acrobat XD
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Adobe Acrobat AC
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    After Effects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Framer
                  </li>
                </ul>
              </motion.div>
              {/* Frontend Development */}
              <motion.div className={`p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/20 w-full sm:w-80% ${theme === 'dark' ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'
                }`}>
                <div className="flex items-center mb-4">
                  <span className="text-2xl md:mr-3">🌐</span>
                  <h2 className="text-lg md:text-2xl font-semibold text-orange-500">Frontend Development</h2>
                </div>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    HTML / CSS
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    JavaScript (ES6+)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Bootstrap Framework
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Angular 17 (Basics)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    React JS (Basics)

                  </li>
                </ul>
              </motion.div>

              {/* State Management */}
              <motion.div className={`p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/20 w-full sm:w-80% ${theme === 'dark' ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'
                }`}>
                <div className="flex items-center mb-4">
                  <span className="text-2xl md:mr-3">🧠</span>
                  <h2 className="text-lg md:text-2xl font-semibold text-orange-500">Other Skills</h2>
                </div>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Mobile Application UI Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Admin Panel UI Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Wireframing & Prototyping
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    User Experience (UX) Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Website Requirement Documentation

                  </li>
                </ul>
              </motion.div>

            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
