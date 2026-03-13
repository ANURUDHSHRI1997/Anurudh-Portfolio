'use client'

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";


export default function About() {
  const { theme } = useTheme();

  return (
    <div className={` transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <Header />

      <main className="flex flex-col md:flex-row  w-full max-w-7xl mx-auto flex-col items-center justify-center py-10 px-6 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <Image src="/images/aboutBoy.png" alt="Profile" width={500} height={500} className="rounded-full" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <h1 className="max-w-4xl text-lg md:text-3xl lg:text-5xl font-bold leading-tight">
            About Me
          </h1>
          <p className="max-w-4xl text-md md:text-xl lg:text-2xl text-left">
            I’m Anurudh Shrivastava, a UI/UX Developer and Front-End Developer with 4 years of experience building user-friendly interfaces for web and mobile applications.
            I started my career at Cylsys Software Pvt Ltd, Mumbai, where I worked as a Front-End Developer and UI/UX Designer for over 2 years. After that, I joined Kiyaan Technology in Indore, and I'm currently working at Ideal IT Techno Pvt Ltd, Indore.
            My core expertise lies in Figma for design, along with HTML, CSS, JavaScript, Bootstrap, Angular, and React basics. I also work with tools like Photoshop, Framer, and After Effects.
            Over the years, I've contributed to 9+ projects across diverse domains — including banking (Finsync), mutual funds (UTI), e-commerce, email marketing (MailBlitz), and mobile apps — which has given me strong exposure to both design and development.
            My focus has always been on creating clean, intuitive interfaces that improve user engagement and satisfaction. I'm passionate about learning new technologies and continuously improving my skill set.
            I hold a B.Tech in Electronics and Communication Engineering from RGPV, Bhopal."**

            Feel free to ask me to make it shorter, more technical, or tailored for a specific role!.</p>

        </motion.div>
      </main>
    </div>
  );
}
