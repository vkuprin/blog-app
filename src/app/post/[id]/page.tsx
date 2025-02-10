import { fetchPost } from "@/lib/api";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  if (!params?.id) {
    notFound();
  }

  try {
    const post = await fetchPost(params.id);

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
  } catch (error) {
    notFound();
  }
}
