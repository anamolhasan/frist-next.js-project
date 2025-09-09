import Link from "next/link";

export default function BlogCard({post}) {
    const { id, title, content, author, date, category } = post
  return (
    <article className=" rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-800">
      {/* Category */}
      <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
        {category}
      </span>

      {/* Title */}
      <h2 className="text-xl font-bold mt-3">{title}</h2>

      {/* Date & Author */}
      <div className="text-sm text-gray-400 mt-1">
        <span>{new Date(date).toLocaleDateString()}</span> •{" "}
        <span>By {author}</span>
      </div>

      {/* Content Preview */}
      <p className="text-gray-400 mt-3">
        {content.length > 100 ? content.slice(0, 100) + "..." : content}
      </p>
      <Link href={`/blog/${id}`}>view details</Link>
    </article>
  );
}