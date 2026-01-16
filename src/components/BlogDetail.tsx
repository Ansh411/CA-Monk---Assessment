import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/ui/Spinner";
import { getBlogById } from "@/api/blogs";
import { Share2, ThumbsUp, MessageSquare } from "lucide-react"; 

function EmptyBlogState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border bg-white py-32 text-center shadow-sm">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-2xl">
        📝
      </div>
      <h2 className="text-xl font-semibold text-gray-900">Select a blog to read</h2>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Choose a post from the list to see detailed insights and analysis.
      </p>
    </div>
  );
}

type Props = {
  blogId: string | null;
};

export default function BlogDetail({ blogId }: Props) {
  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId!),
    enabled: !!blogId,
  });

  if (!blogId) return <EmptyBlogState />;
  if (isLoading) return <Spinner />;

  if (isError || !blog) {
    return (
      <div className="rounded-2xl border bg-white py-20 text-center text-red-500">
        <p>Error loading blog content. Please verify the API is running.</p>
      </div>
    );
  }

  return (
    <article className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden">

      <div className="relative h-[420px] w-full">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-8 py-10 md:px-12">

        <div className="mb-4 flex items-center gap-3 text-xs font-bold text-indigo-600 uppercase tracking-widest">
          <span>{blog.category[0]}</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-400 font-medium capitalize">5 min read</span>
        </div>

        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 mb-6">
          {blog.title}
        </h1>

        <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-8 hover:bg-indigo-700 transition-all shadow-sm">
          <Share2 size={16} /> Share Article
        </button>

        <div className="grid grid-cols-3 border-y border-gray-100 py-6 mb-8 text-center bg-gray-50/50 rounded-sm">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase text-gray-400 font-bold tracking-tighter">Category</span>
            <span className="text-sm font-bold text-slate-800">{blog.category.join(" & ")}</span>
          </div>
          <div className="flex flex-col gap-1 border-x border-gray-100">
            <span className="text-[10px] uppercase text-gray-400 font-bold tracking-tighter">Read Time</span>
            <span className="text-sm font-bold text-slate-800">5 Mins</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase text-gray-400 font-bold tracking-tighter">Date</span>
            <span className="text-sm font-bold text-slate-800">
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">

          <p className="text-lg text-slate-600 mb-6 font-medium">
            {blog.description}
          </p>
          
          <div className="space-y-4">
            {blog.content?.split("\n\n").map((para: string, i: number) => (
              <p key={i}>{para}</p>
            )) || <p>No content available.</p>}
          </div>
        </div>


        <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-indigo-100 border border-indigo-50">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png" 
                alt="Author Avatar" 
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Written by Author Name</p>
              <p className="text-xs text-slate-500 font-medium">Author Profession / Position</p>
            </div>
          </div>
          
          <div className="flex items-center gap-5 text-slate-400">
            <button className="hover:text-indigo-600 transition-colors">
              <ThumbsUp size={22} />
            </button>
            <button className="hover:text-indigo-600 transition-colors">
              <MessageSquare size={22} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}