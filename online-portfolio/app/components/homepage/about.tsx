"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface AboutData {
  title: string; 
}

export default function AboutHome({ about_data } : { about_data: AboutData }) {
  return (
    <div className="relative min-h-[50vh] font-sans py-8">
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
            <h1 className="text-4xl font-bold mb-4">{about_data.title}</h1>
            <p className="leading-relaxed text-sm sm:text-base mb-6">
              Placeholder Text
            </p>
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
