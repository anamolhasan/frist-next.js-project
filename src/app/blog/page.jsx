import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import React from "react";

const blogPage = async() => {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold py-10 ">Blog Page</h1>
      <div className="grid grid-cols-3 gap-5 ">
        {posts.map((post) => (
        
            <BlogCard post={post} key={post.id}/>
        
        ))}
      </div>
    </div>
  );
};

export default blogPage;
