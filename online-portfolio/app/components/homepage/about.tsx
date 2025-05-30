"use client";

interface AboutData {
  title: string; 
  summary: string; 
}

export default function AboutHome({ about_data } : { about_data: AboutData }) {
  return (
    <div className="font-sans py-8 bg-[#202020] bg-linear-to-b from-gray-100 to-white">
      <div
        className="w-full bg-center"
      >
        <div className="flex items-center justify-center py-8">
          <div className="flex flex-col sm:flex-row items-center gap-10 px-6 sm:px-12 max-w-5xl w-full py-12 text-[#202020]">
            <h1 className="text-8xl font-bold mb-4 block w-full leading-28">{about_data.title}</h1>
            <p className="leading-relaxed text-sm sm:text-base mb-6 block w-full whitespace-pre-line">
              {about_data.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
