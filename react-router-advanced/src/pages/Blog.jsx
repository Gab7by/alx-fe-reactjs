import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Advanced Routing" },
  ];

  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
