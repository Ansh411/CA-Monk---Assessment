import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-lg">
            <div className="h-8 w-8 rounded-md bg-indigo-600 text-white flex items-center justify-center">
              <GraduationCap />
            </div>
            <span>CA MONK</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-black transition">
              Tools
            </a>
            <a href="#" className="hover:text-black transition">
              Practice
            </a>
            <a href="#" className="hover:text-black transition">
              Events
            </a>
            <a href="#" className="hover:text-black transition">
              Job Board
            </a>
            <a href="#" className="hover:text-black transition">
              Points
            </a>
          </nav>

          {/* Profile Button */}
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            Profile
          </Button>
        </div>
      </div>
    </header>
  );
}
