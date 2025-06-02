"use client";
import { motion } from "framer-motion";

interface AboutData{
  title: string; 
  summary: string; 
}

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
          <h1 className="text-gray-800 text-4xl font-semibold flex items-center justify-center py-6">{about_data.title}</h1>
          <div className="flex items-center justify-center py-8 ">
            <div className="gap-8 px-6 sm:px-12 max-w-5xl w-full">
              <p> I&apos;m a Los Angeles native with a passion for building things. As a full-stack developer and technical lead, I&apos;ve spent the last several years crafting web applications, leading teams, and bridging the gap between business goals and technical execution. Whether it&apos;s WordPress, Laravel, React, or AWS, I thrive at the intersection of problem-solving and clean, scalable design. Outside of work, I&apos;m a music and arts enthusiast, car lover, and coffee purist. I enjoy live shows, long hikes, and weekends spent grilling with friends. Whether I&apos;m spinning up servers or flipping steaks on the grill, I bring the same energy: fun, curious, collaborative, and always up for a challenge. </p>
            </div>
          </div>
          </motion.div>
      </div>
    </div>
  );
}
