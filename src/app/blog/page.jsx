import Link from "next/link";
import React from "react";

const blogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "This is title 1",
      description: "This is blog description",
    },
    {
      id: 2,
      title: "This is title 2",
      description: "This is blog description",
    },
    {
      id: 3,
      title: "This is title 3",
      description: "This is blog description",
    },
  ];
  return (
    <div className="">
      <p>BlogPage</p>
      <div className="flex gap-5 ">
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-10 rounded-md">
            <p>{blog.id}</p>
            <p>{blog.title}</p>
            <Link href={`/blog/${blog.id}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default blogPage;
