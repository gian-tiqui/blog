import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../server/database";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const photoStyle = {
    width: "40px",
    height: "40px",
  };

  const [postText, setPostText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    if (postText.trim() === "") {
      setErrorMessage("Title and post content cannot be empty.");
    } else {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString();

      await addDoc(postsCollectionRef, {
        postText,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
          photo: auth.currentUser.photoURL,
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
    <div className="p-3">
      <div className="custom-card2 bg-black text-light">
        <div className="row">
          <div className="col col-sm-1">
            <img
              src={auth.currentUser.photoURL}
              alt={auth.currentUser.displayName}
              className="user-photo rounded-circle img-fluid"
              style={photoStyle}
            />
          </div>
          <div className="col">
            <div>
              {errorMessage && <p className="text-danger">{errorMessage}</p>}

              <div className="bottom-border">
                <textarea
                  id="postText"
                  className="form-control bg-black mb-2"
                  placeholder="What is happening?!"
                  rows="3"
                  onChange={(event) => setPostText(event.target.value)}
                  style={{ border: "none", outline: "none !important" }}
                />
              </div>
            </div>
            <div className="d-flex justify-content-end mt-3">
              <button
                className="btn btn-success rounded-pill px-5"
                onClick={createPost}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
