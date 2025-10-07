import { use, useEffect, useState } from "react";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const postsData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  await sleep(2000);
  return response.json();
};

const Posts = () => {
  const posts = use(postsData());

  console.log(posts);
  return (
    <div>
      <h2>Posts Component</h2>
      <ul>
        {posts?.slice(0, 5).map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
