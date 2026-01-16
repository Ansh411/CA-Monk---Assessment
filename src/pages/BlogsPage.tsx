import { useState } from "react";
import BlogList from "@/components/BlogList";
import BlogDetail from "@/components/BlogDetail";
import Banner from "@/components/Banner";
import CreateBlogForm from "@/components/CreateBlogForm";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function BlogsPage() {
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <Banner />
      
      <div className="mx-auto max-w-[1400px] p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Latest Articles
          </h2>

          {/* Blog Dialog */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all active:scale-95">
                <Plus className="mr-2 h-4 w-4" /> Create New Post
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Publish New Article</DialogTitle>
                <p className="text-sm text-slate-500">
                  Fill in the details below to share a new insight with the CA Monk community.
                </p>
              </DialogHeader>
              <CreateBlogForm onSuccess={() => setIsDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Blog List */}
          <aside className="lg:col-span-4 h-fit">
            <BlogList onSelect={setSelectedBlogId} selectedId={selectedBlogId} />
          </aside>

          {/* Right Content - Blog Detail */}
          <main className="lg:col-span-8">
            <BlogDetail blogId={selectedBlogId} />
          </main>
        </div>
      </div>
    </div>
  );
}