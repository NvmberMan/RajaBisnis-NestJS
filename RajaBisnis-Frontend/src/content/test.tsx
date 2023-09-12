import React, { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://4bad-158-140-191-50.ngrok-free.app/shop");
      const responseData: Post[] = response.data;
      setPosts(responseData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>List of Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}