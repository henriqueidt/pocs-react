"use client";

import { use } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchPosts = async () => {
  console.log("Starting to fetch posts..."); // You'll see this only when component renders
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  await sleep(5000);
  return response.json();
};

let postsPromise: Promise<Post[]> | null = null;

const Posts = () => {
  if (!postsPromise) {
    postsPromise = fetchPosts();
  }

  const posts = use(postsPromise);

  return (
    <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">Posts Component with Activity</h2>
      <ul>
        {posts?.slice(0, 5).map((post: Post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
