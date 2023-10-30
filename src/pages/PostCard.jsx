import React from "react";

function PostCard({ title, content, onDelete, showDeleteBtn }) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          {showDeleteBtn && (
            <button onClick={onDelete} className="btn btn-danger">
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
