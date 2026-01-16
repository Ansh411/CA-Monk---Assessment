import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/api/blogs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogForm({ onSuccess }: { onSuccess?: () => void }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      if (onSuccess) onSuccess();
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Convert comma-separated string into an array of uppercase categories
    const categoryInput = formData.get("category") as string;
    const categories = categoryInput
      .split(",")
      .map((cat) => cat.trim().toUpperCase())
      .filter((cat) => cat !== "");

    mutation.mutate({
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      content: formData.get("content") as string,
      category: categories.length > 0 ? categories : ["GENERAL"], // Fallback category
      coverImage: (formData.get("coverImage") as string) || "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      date: new Date().toISOString(),
    });

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 pt-4">
      {/* Title */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">Article Title</label>
        <Input name="title" placeholder="e.g. Future of Fintech" required />
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">Categories (comma separated)</label>
        <Input name="category" placeholder="FINANCE, TECH, CAREER" required />
      </div>

      {/* Cover Image URL */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">Cover Image URL</label>
        <Input name="coverImage" placeholder="https://images.pexels.com/..." />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">Short Description</label>
        <Input name="description" placeholder="A brief hook for your readers..." required />
      </div>

      {/* Main Content */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">Main Content</label>
        <Textarea 
          name="content" 
          placeholder="Write your full article here..." 
          className="min-h-[180px] leading-relaxed" 
          required 
        />
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t">
        <Button 
          type="submit" 
          className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Publishing..." : "Publish Article"}
        </Button>
      </div>
    </form>
  );
}