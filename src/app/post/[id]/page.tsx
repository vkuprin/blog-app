import { fetchPost } from "@/lib/api";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  try {
    const { id } = await params;
    const post = await fetchPost(id);
    return {
      title: `${post.title} | Blog App`,
      description: post.body.slice(0, 160),
    };
  } catch {
    return {
      title: "Post Not Found | Blog App",
      description: "The requested post could not be found.",
    };
  }
}

export default async function PostPage({ params }: PostPageProps) {
  try {
    const { id } = await params;
    const post = await fetchPost(id);

    return (
      <article className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="flex gap-2 mb-6">
          {post.hashtags?.map((hashtag) => (
            <span key={hashtag} className="text-blue-600">
              {hashtag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 mb-4">Author ID: {post.userId}</p>
        <div className="prose lg:prose-xl">{post.body}</div>
      </article>
    );
  } catch {
    notFound();
  }
}
