"use client";

interface Project {
  name: string; 
  url: string[];  
}

interface ProjectData {
  title: string; 
  projects: Project[]; 
}

export default function ProjectHome({ project_data } : { project_data: projectData }) {

  return (
    <div className="font-sans py-8 bg-gray-100">
      <div
        className="w-full bg-center"
      >
        <h1 className="flex items-center justify-center py-8">Project Samples</h1>
        <div className="flex items-center justify-center py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 max-w-5xl w-full">
          {project_data.projects.map((single_project, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-blue-300">{single_project.name}</h2>
              <a href={single_project.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                Visit Project
              </a>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
