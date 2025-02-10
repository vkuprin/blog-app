# Next.js Blog Application

A modern blog application built with Next.js 15 App Router and Tailwind CSS, featuring server components, dynamic routing, and hashtag filtering.

## Features

- 🚀 Built with Next.js 15 App Router
- 💅 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🏷️ Hashtag filtering system
- 🔄 Dynamic routing
- 🎨 Clean and modern UI
- ⚡ Server Components for better performance
- 🔍 SEO optimized with metadata
- 🎯 TypeScript for type safety

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18.17 or later)
- Yarn or npm

## Getting Started

1. Clone the repository:
```bash
git clone <your-repository-url>
cd blog-app
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Run the development server:
```bash
yarn dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # App Router directory
│   ├── about/             # About page
│   ├── post/[id]/         # Dynamic post pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── BlogCard.tsx       # Blog post card component
│   ├── HashtagFilter.tsx  # Hashtag filtering component
│   └── Navbar.tsx         # Navigation component
└── lib/                   # Utility functions and types
    ├── api.ts             # API functions
    └── types.ts           # TypeScript types
```

## Key Components

### Home Page (`app/page.tsx`)
- Displays a grid of blog posts
- Implements hashtag filtering
- Server-side rendering for optimal performance

### Post Page (`app/post/[id]/page.tsx`)
- Dynamic routing for individual posts
- Metadata generation for SEO
- Error handling with notFound()

### BlogCard Component
- Displays post preview
- Handles hashtag interactions
- Responsive design

### HashtagFilter Component
- Filters posts by hashtag
- Clear and intuitive UI
- Client-side filtering

## API Integration

The application integrates with the JSONPlaceholder API to fetch blog posts. Each post is enhanced with random hashtags for demonstration purposes.

## Styling

- Tailwind CSS for utility-first styling
- Responsive design principles
- Custom components following Tailwind best practices

## Error Handling

- Proper error boundaries
- Loading states
- 404 page for non-existent posts
- Network error handling

## Development

```bash
# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

```
