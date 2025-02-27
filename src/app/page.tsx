"use client";

import { useEffect, useState } from "react";
import { Post } from "@/lib/types";
import { fetchPosts } from "@/lib/api";
import BlogCard from "@/components/BlogCard";
import HashtagFilter from "@/components/HashTagFilter";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedHashtag, setSelectedHashtag] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error loading posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const filteredPosts = selectedHashtag
    ? posts.filter((post) => post.hashtags?.includes(selectedHashtag))
    : posts;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
      <HashtagFilter
        selectedHashtag={selectedHashtag}
        onHashtagSelectAction={setSelectedHashtag}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            onHashtagClick={setSelectedHashtag}
          />
        ))}
      </div>
    </div>
  );
}
