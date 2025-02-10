import Link from "next/link";
import { Post } from "@/lib/types";

interface BlogCardProps {
  post: Post;
  onHashtagClick?: (hashtag: string) => void;
}

export default function BlogCard({ post, onHashtagClick }: BlogCardProps) {
  const truncatedBody = post.body.slice(0, 100) + "...";

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold mb-2">
        <Link
          href={`/post/${post.id}`}
          className="hover:text-blue-600 transition-colors"
        >
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600 mb-4">{truncatedBody}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.hashtags?.map((hashtag) => (
          <button
            key={hashtag}
            onClick={() => onHashtagClick?.(hashtag)}
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            {hashtag}
          </button>
        ))}
      </div>
      <Link
        href={`/post/${post.id}`}
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        Read More →
      </Link>
    </div>
  );
}
