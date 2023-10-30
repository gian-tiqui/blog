import React, { useEffect } from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../server/database";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });

    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });

  return (
    <div className="container">
      <div className="postContainer">
        <h1>Create a post</h1>
        <div className="inputGroups">
          <label>Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGroups">
          <label>Post:</label>
          <textarea
            placeholder="Post"
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary" onClick={createPost}>
          Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
