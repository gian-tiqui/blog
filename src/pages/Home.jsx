import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  getDocs,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../server/database";
import PostCard from "../components/PostCard";

function Home({ isAuth }) {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionReference = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const q = query(postsCollectionReference, orderBy("date", "desc"));
      const data = await getDocs(q);
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
    <ul style={{ margin: 0, padding: 0 }}>
      {postLists.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.postText}
          showDeleteBtn={isAuth && post.author.id === auth.currentUser.uid}
          onDelete={() => deletePost(post.id)}
          author={post.author.name}
          date={post.date}
          photoURL={post.author.photo}
        />
      ))}
    </ul>
  );
}

export default Home;
