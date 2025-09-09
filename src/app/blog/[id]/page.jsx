import Link from "next/link";
import React from "react";

const DetailsBlogPage = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`https://api.vercel.app/blog/${id}`);
    const blog = await res.json();
    // console.log(blog)

  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <article className="max-w-3xl mx-auto px-6 bg-white rounded-2xl shadow-lg p-8 leading-relaxed">
        {/* Category */}
        <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {blog.category}
        </span>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>

        {/* Author + Date */}
        <div className="text-sm text-gray-500 mb-8">
          <span>By {blog.author}</span> •{" "}
          <span>{new Date(blog.date).toLocaleDateString()}</span>
        </div>

        {/* Image (optional placeholder) */}
        {/* <div className="mb-8">
          <img
            src={`https://source.unsplash.com/800x500/?${blog.category}`}
            alt={blog.title}
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div> */}

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-800">
          {blog.content}
        </div>

        {/* Back Link */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="text-yellow-600 hover:underline font-medium"
          >
            ← Back to Blogs
          </Link>
        </div>
      </article>
    </main>
  );
};

export default DetailsBlogPage;
