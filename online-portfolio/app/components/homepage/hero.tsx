"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface UserData {
  firstname: string; 
  lastname: string; 
  summary: string;
}

export default function HeroHome({ user_data } : { user_data: UserData }) {
  return (
    <div className="relative min-h-[70vh] sm:min-h-[60vh] font-sans pt-8 pb-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/black_background_image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-full px-6 sm:px-12 pt-8 pb-8">
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10 max-w-5xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-white w-full sm:w-1/2 shadow-xl order-2 sm:order-1"
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              {user_data.firstname} {user_data.lastname}
            </h1>
            <p className="leading-relaxed text-sm sm:text-base mb-6">
              {user_data.summary}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/kevin-nerio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition duration-300 ease-in-out text-white"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/kevinnerio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition duration-300 ease-in-out text-white"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-shrink-0 order-1 sm:order-2"
          >
            <Image
              src="/images/profile_pic.png"
              alt="Profile picture of Kevin Nerio"
              width={200}
              height={200}
              className="rounded-xl shadow-lg w-48 h-48 sm:w-52 sm:h-52 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}