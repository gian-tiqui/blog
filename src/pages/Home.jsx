import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../server/database";
import PostCard from "./PostCard";

function Home({ isAuth }) {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionReference = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionReference);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);

    setPostLists((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <ul>
        {postLists.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.postText}
            showDeleteBtn={isAuth && post.author.id === auth.currentUser.uid}
            onDelete={() => deletePost(post.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Home;
