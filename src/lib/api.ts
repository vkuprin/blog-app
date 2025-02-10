import { Post } from "@/lib/types";

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 }, // revalidate every hour
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await response.json();
  return posts.map((post: Post) => ({
    ...post,
    hashtags: generateRandomHashtags(),
  }));
}

export async function fetchPost(id: string): Promise<Post> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  const post = await response.json();
  return {
    ...post,
    hashtags: generateRandomHashtags(),
  };
}

function generateRandomHashtags(): string[] {
  const hashtags = [
    "#nextjs",
    "#react",
    "#webdev",
    "#coding",
    "#javascript",
    "#typescript",
  ];
  const count = Math.floor(Math.random() * 3) + 1;
  return hashtags.sort(() => 0.5 - Math.random()).slice(0, count);
}
