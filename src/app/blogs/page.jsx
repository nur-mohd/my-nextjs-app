import React from 'react';
import Post from '../components/Post';

const blogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    description:
      "Learn the basics of React and understand how components help you build modern user interfaces.",
    author: "John Doe",
    category: "React",
    date: "2026-09-10",
    image: "/images/react-blog.jpg",
  },
  {
    id: 2,
    title: "Understanding JavaScript Promises",
    description:
      "A beginner-friendly guide to JavaScript promises, async/await, and handling asynchronous operations.",
    author: "Sarah Smith",
    category: "JavaScript",
    date: "2026-09-08",
    image: "/images/javascript-blog.jpg",
  },
  {
    id: 3,
    title: "Why Use Next.js?",
    description:
      "Discover how Next.js makes React development easier with routing, server rendering, and powerful features.",
    author: "Michael Brown",
    category: "Next.js",
    date: "2026-09-05",
    image: "/images/nextjs-blog.jpg",
  },
  {
    id: 4,
    title: "A Beginner's Guide to Tailwind CSS",
    description:
      "Learn how to create beautiful and responsive websites quickly using Tailwind CSS utility classes.",
    author: "Emily Johnson",
    category: "CSS",
    date: "2026-09-02",
    image: "/images/tailwind-blog.jpg",
  },
  {
    id: 5,
    title: "Understanding Git and GitHub",
    description:
      "Learn the essential Git commands and understand how GitHub helps developers manage their projects.",
    author: "David Wilson",
    category: "Git",
    date: "2026-08-30",
    image: "/images/github-blog.jpg",
  },
];


const BlogsPage = () => {




    return (
        <div>
            <h1>Blogs Page</h1>
            {
                blogsData.map(post => (
                    <Post key={post.id} post={post} />
                ))
            }
        </div>
    );
};

export default BlogsPage;