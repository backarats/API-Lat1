import styles from "./postPage.module.css";
import React from "react";
import ViewUserButton from "../components/Posts/ViewUserButton";
import CardList from "../components/Posts/CardList";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const respond = await fetch(base_url, {
    next: { revalidate: 3600 }
  });
  const posts: Iposts[] = await respond.json();
  return (
    <>
    <p>{new Date().toLocaleTimeString()} </p>
      <h1 className="text-fuchsia-500">POSTINGAN PAGE</h1>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <p>{post.id} </p>
            <p>{post.body} </p>
            <p>{post.title} </p>
            <ViewUserButton userId={post.userId} />
          </CardList>
        );
      })}
    </>
  );
};

export default Posts;
