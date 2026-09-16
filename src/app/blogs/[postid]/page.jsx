import React from 'react';

const blogsData = [
    {
        id:1,
        title: "Getting Started with React",
        description: "Learn the basics of React and understand how components help you build modern user interfaces.",
        author: "John Doe",
        category: "React",
        date: "2026-09-10",
        image: "/images/react-blog.jpg",
    },
    {
        id:2,
        title: "Understanding JavaScript Promises",
        description: "A beginner-friendly guide to JavaScript promises, async/await, and handling asynchronous operations.",
        author: "Jane Smith",
        category: "JavaScript",
        date: "2026-09-15",
        image: "/images/javascript-blog.jpg",
    },
    {
        id:3,
        title: "Why Use Next.js?",
        description: "Discover how Next.js makes React development easier with routing, server rendering, and powerful features.",
        author: "Alice Johnson",
        category: "Next.js",
        date: "2026-09-20",
        image: "/images/nextjs-blog.jpg",
    },
    {
        id:4,
        title: "A Beginner's Guide to Tailwind CSS",
        description: "Learn how to create beautiful and responsive websites quickly using Tailwind CSS utility classes.",
        author: "Bob Williams",
        category: "Tailwind CSS",
        date: "2026-09-25",
        image: "/images/tailwindcss-blog.jpg",
    },
    {
        id:5,
        title: "Understanding Git and GitHub",
        description: "Learn the essential Git commands and understand how GitHub helps developers manage their projects.",
        author: "Charlie Brown",
        category: "Git",
        date: "2026-09-30",
        image: "/images/git-github-blog.jpg",
    },
];



const postDetailPage = async  ({params}) => {
    const {postid} = await params;
    const post = blogsData.find((blog) => blog.id === parseInt(postid));
    return (
        <div>
            <h2>Post Detail Page: {postid}</h2>
            {
            post ? (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p>Author: {post.author}</p>
                    <p>Category: {post.category}</p>
                    <p>Date: {post.date}</p>
                </div>
            ) : (
                <p>Post not found</p>
            )}
        </div>
    );
};

export default postDetailPage;