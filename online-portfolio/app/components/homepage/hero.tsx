"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface UserData {
  firstname: string; 
  lastname: string; 
  summary: string;
}

export default function HeroHome({user_data} : { user_data: UserData;}) 
{
  return (
    <div className="relative font-sans pt-8 pb-8 bg-[#181c20]">
      <div
        className="absolute inset-0 bg-cover bg-center"
      >
        <div className="absolute inset-0" />
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-full px-6 sm:px-12 pt-8 pb-8">
        <div className="flex flex ssm:flex-row items-center text-center justify-center gap-8 sm:gap-10 max-w-5xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center backdrop-blur-md bg-gray-100 border border-white/10 p-6 sm:p-8 w-full shadow-xl order-2 sm:order-1 outline outline-2 outline-white/20 outline-offset-4"
          >
            <Image
              src="/images/kevin_blue.png"
              alt="Profile picture of Kevin Nerio"
              width={300}
              height={300}
              className="rounded-xl shadow-lg w-48 h-48 sm:w-52 sm:h-52 object-cover mb-4"
            />
            <h1 className="text-gray-800 text-3xl sm:text-4xl font-bold mb-4 pt-6">
              {user_data.firstname} {user_data.lastname}
            </h1>
            <p className="text-gray-800 leading-relaxed text-sm sm:text-base mb-6">
              {user_data.summary}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/kevin-nerio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition duration-300 ease-in-out text-gray-800"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/kevinnerio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition duration-300 ease-in-out text-gray-800"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}