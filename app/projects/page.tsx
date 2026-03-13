'use client'

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

export default function Projects() {
  const { theme } = useTheme();

  return (
    <div className={`relative transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <div className="relative z-10">
        <Header />

        <main className="flex w-full max-w-7xl mx-auto py-10 px-6  md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 md:gap-12"
          >
            <h1 className="text-lg md:text-3xl lg:text-4xl font-bold text-center md:mb-8">Worked On Live Projects</h1>
            <div className="flex-row">
              <p className={`
              ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}
            transition-colors`}>Gym SaaS (Admin & Super Admin)</p>

            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <Image src="/images/gym.png" alt="Gym SaaS" className="w-[100%] h-auto md:w-[50%] md:h-auto" width={500} height={500} />
              <Image src="/images/superAdmin1.png" alt="Gym SaaS Super Admin" className="w-[100%] h-auto md:w-[50%] md:h-auto " width={500} height={500} />
            </div>
            <p className={`
              ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}
            transition-colors`}>Dr (Patient Chart Screen & Clinic Management)</p>

            <div className="flex gap-4 flex-col md:flex-row">
              <Image src="/images/dr1.png" alt="Veels" className="w-[100%] h-auto md:w-[50%] md:h-full " width={500} height={500} />
              <Image src="/images/clinic.png" alt="Veels Admin" className="w-[100%] h-auto md:w-[50%] md:h-full " width={500} height={500} />
            </div>

            <p className={`
              ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}
            transition-colors`}>Dr (Docter's Module)</p>

            <div className="flex gap-4 flex-col md:flex-row">
              <Image src="/images/drModule1.png" alt="Dr Module 1" className="w-[100%] h-auto md:w-[50%] md:h-full " width={500} height={500} />
              <Image src="/images/drModule2.png" alt="Dr Module 2" className="w-[100%] h-auto md:w-[50%] md:h-full " width={500} height={500} />
            </div>

            <p className={`
              ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}
            transition-colors`}>Shipoff App</p>

            <div className="flex gap-4 flex-col md:flex-row">
              <Image src="/images/shipOff1.png" alt="Shipoff App 1" className="w-[100%] h-auto md:w-[50%] md:h-full " width={500} height={500} />
              <Image src="/images/shipOff2.png" alt="Shipoff App 2" className="w-[100%] h-auto md:w-[50%] md:h-full " width={500} height={500} />
            </div>


          </motion.div>
        </main>
      </div>
    </div>
  );
}
