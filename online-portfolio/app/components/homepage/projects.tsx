"use client";
import { motion } from "framer-motion";

interface Project {
  name: string; 
  url: string;  
  description: string; 
}

interface ProjectData {
  title: string; 
  projects: Project[]; 
}

export default function ProjectHome({ project_data } : { project_data: ProjectData }) {

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
          <h1 className="text-gray-800 text-4xl font-semibold flex items-center justify-center py-6">Project Samples</h1>
          <div className="flex items-center justify-center py-8 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 max-w-5xl w-full">
            {project_data.projects.map((single_project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group bg-gray-25 px-4 py-8 rounded-tl-xl rounded-br-xl shadow-lg"
              >
                <h2 className="text-xl text-gray-800 font-semibold py-2">
                  {single_project.name}
                </h2>
                <p className="py-4 text-gray-800">Technical: {single_project.description}</p>
                <a
                  href={single_project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
                >
                  Visit Project
                </a>
              </motion.div>
            ))}
            </div>
          </div>
          </motion.div>
      </div>
    </div>
  );
}
