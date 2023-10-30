import React from "react";

function CreatePost() {
  return (
    <div className="container">
      <div className="postContainer">
        <h1>Create a post</h1>
        <div className="inputGroups">
          <label>Title:</label>
          <input placeholder="Title..." />
        </div>
        <div className="inputGroups">
          <label>Post:</label>
          <textarea placeholder="Post" />
        </div>
        <button className="btn btn-primary">Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
