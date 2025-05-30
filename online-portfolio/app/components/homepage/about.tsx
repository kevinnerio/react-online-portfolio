"use client";
import { motion } from "framer-motion";

export default function AboutHome({ about_data } : { about_data: AboutData }) {

  return (
    <div 
      className="font-sans bg-cover flex flex-col items-center text-center p-8 bg-[#181c20]"
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center w-full bg-center shadow-lg border backdrop-blur-md bg-gray-100 border border-white/10 p-6 max-w-5xl outline outline-2 outline-white/20 outline-offset-4"
        >
          <h1 className="text-gray-800 text-4xl font-semibold flex items-center justify-center py-6">About Section</h1>
          <div className="flex items-center justify-center py-8 ">
            <div className="gap-8 px-6 sm:px-12 max-w-5xl w-full">
              <p>Design, develop, code, and troubleshoot with consideration of upstream and downstream systems and technical implications. Apply knowledge of tools within the Software Development Life Cycle toolchain to improve the value realized by automation. Participate in code reviews to ensure solutions align with predefined specifications. </p>
            </div>
          </div>
          </motion.div>
      </div>
    </div>
  );
}
