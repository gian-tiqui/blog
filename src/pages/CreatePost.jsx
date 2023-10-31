import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../server/database";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    if (title.trim() === "" || postText.trim() === "") {
      setErrorMessage("Title and post content cannot be empty.");
    } else {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString();

      await addDoc(postsCollectionRef, {
        title,
        postText,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
        date: formattedDate,
      });

      navigate("/");
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  });

  return (
    <div className="container">
      <div className="card m-3 bg-dark text-light">
        <div className="card-header">
          <h3>Create a Post</h3>
        </div>
        <div className="card-body">
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <div className="mb-3">
            <label htmlFor="title" className="form-label text-light">
              Title:
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              placeholder="Title..."
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="postText" className="form-label text-light">
              Post:
            </label>
            <textarea
              id="postText"
              className="form-control"
              placeholder="Post..."
              rows="5"
              onChange={(event) => setPostText(event.target.value)}
            />
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={createPost}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
