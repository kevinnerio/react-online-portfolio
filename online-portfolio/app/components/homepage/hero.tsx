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
    <div className="relative min-h-screen font-sans py-8">
      <div
        className="absolute top-0 left-0 w-full h-[50vh] bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/black_background_image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center py-8">
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-10 px-6 sm:px-12 max-w-5xl w-full py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 text-white w-full sm:w-1/2 shadow-xl"
          >
            <h1 className="text-4xl font-bold mb-4">{user_data.firstname} {user_data.lastname}</h1>
            <p className="leading-relaxed text-sm sm:text-base mb-6">
              {user_data.summary}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 z-1 relative">
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
              className="flex-shrink-0"
            >
              <Image
                src="/images/profile_pic.png"
                alt="Profile picture of Kevin Nerio"
                width={200}
                height={200}
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen p-10 sm:p-20 grid place-items-center">
        <main className="w-full max-w-5xl">
          {/* Additional content goes here */}
        </main>
      </div>
    </div>
  );
}
