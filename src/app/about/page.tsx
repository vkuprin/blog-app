export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Our Blog</h1>
      <p className="text-gray-600 mb-4">
        Welcome to our blog! This is a demo application built with Next.js and
        Tailwind CSS. It demonstrates various features including static site
        generation, dynamic routing, and responsive design.
      </p>
      <p className="text-gray-600">
        The blog posts are fetched from the JSONPlaceholder API and enhanced
        with custom hashtag functionality for demonstration purposes.
      </p>
    </div>
  );
}
