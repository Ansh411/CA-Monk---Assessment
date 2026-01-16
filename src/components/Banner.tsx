import { GraduationCap } from "lucide-react";

export default function Banner() {
  return (
    <div className="w-full bg-[#0f172a] py-16 px-4 text-center text-white">
      <h1 className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold tracking-tight">
        <GraduationCap 
          className="h-10 w-10 md:h-12 md:w-12 text-indigo-500" 
          strokeWidth={2.5} 
        />
        <span>CA Monk Blog</span>
      </h1>
      
      <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
        Stay updated with the latest trends in finance, accounting, and career growth.
      </p>
    </div>
  );
}