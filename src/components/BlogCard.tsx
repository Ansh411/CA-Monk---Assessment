import { Card, CardContent } from "@/components/ui/card";
import type { Blog } from "@/api/blogs";
import { cn } from "@/lib/utils";

function getRelativeTime(dateString: string) {
  const now = new Date();
  const postDate = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

  const units = [
    { name: 'year', seconds: 31536000 },
    { name: 'month', seconds: 2592000 },
    { name: 'week', seconds: 604800 },
    { name: 'day', seconds: 86400 },
    { name: 'hour', seconds: 3600 },
    { name: 'minute', seconds: 60 },
  ];

  for (const unit of units) {
    const interval = Math.floor(diffInSeconds / unit.seconds);
    if (interval >= 1) {
      return `${interval} ${unit.name}${interval > 1 ? 's' : ''} ago`;
    }
  }
  return "Just now";
}

export default function BlogCard({blog, onClick, isActive, } : { blog: Blog; onClick: () => void; isActive: boolean;}) {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "cursor-pointer border-l-4 transition-all duration-200",
        isActive 
          ? "border-indigo-600 bg-indigo-50/50 shadow-md ring-1 ring-indigo-100" 
          : "border-transparent hover:border-gray-300 hover:bg-gray-50"
      )}
    >
      <CardContent className="p-5 space-y-3">
        <div className="flex justify-between items-start">
          <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
            {blog.category[0]}
          </p>
          <span className="text-[10px] text-gray-400 font-medium">
            {getRelativeTime(blog.date)}
          </span>
        </div>
        
        <h3 className={cn(
          "font-bold leading-snug",
          isActive ? "text-indigo-900" : "text-slate-800"
        )}>
          {blog.title}
        </h3>
        
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  );
}