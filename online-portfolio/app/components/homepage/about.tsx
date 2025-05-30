"use client";

interface AboutData {
  title: string; 
}

export default function AboutHome({ about_data } : { about_data: AboutData }) {
  return (
    <div className="min-h-[50vh] font-sans py-8">
      <div
        className="w-full h-[50vh] bg-center"
      >
        <div className="flex items-center justify-center py-8">
          <div className="flex flex-col sm:flex-row items-center gap-10 px-6 sm:px-12 max-w-5xl w-full py-12">
            <h1 className="text-4xl font-bold mb-4 block w-full">{about_data.title}</h1>
            <p className="leading-relaxed text-sm sm:text-base mb-6 block w-full">
              Placeholder Text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
