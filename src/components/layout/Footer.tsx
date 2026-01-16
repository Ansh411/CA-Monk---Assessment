import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-black text-neutral-400 border-t border-white/5">
      <div className="mx-auto max-w-[1400px] px-6 py-12 lg:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="flex flex-col items-center sm:items-start space-y-5 text-center sm:text-left">
            <div className="flex items-center gap-2 text-white font-extrabold text-xl tracking-tighter">
              <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <GraduationCap />
              </div>
              CA MONK
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering the next generation of financial leaders with premium tools, 
              community insights, and career-defining knowledge.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-white cursor-pointer transition-colors">Webinars</li>
              <li className="hover:text-white cursor-pointer transition-colors">Case Studies</li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">Job Board</li>
              <li className="hover:text-white cursor-pointer transition-colors">Practice Tests</li>
              <li className="hover:text-white cursor-pointer transition-colors">Mentorship</li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-white cursor-pointer transition-colors">Twitter</li>
              <li className="hover:text-white cursor-pointer transition-colors">Instagram</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] font-medium">
          <p className="text-neutral-500">
            &copy; {new Date().getFullYear()} CA Monk. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8 text-neutral-500">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}