import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/api/blogs";
import BlogCard from "./BlogCard";
import BlogSkeleton from "./BlogSkeleton";

export default function BlogList({
  onSelect,
  selectedId, 
}: {
  onSelect: (id: string) => void;
  selectedId: string | null;
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <BlogSkeleton />;
  if (error) return <p className="text-red-500">Error loading blogs</p>;

  return (
    <div className="space-y-4">
      {data!.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          isActive={blog.id === selectedId} 
          onClick={() => onSelect(blog.id)}
        />
      ))}
    </div>
  );
}