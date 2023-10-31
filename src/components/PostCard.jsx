import React from "react";

function PostCard({ title, content, onDelete, showDeleteBtn, author, date }) {
  return (
    <div className="card bg-black text-light light-border custom-card-2">
      <div className="card-header d-flex justify-content-between">
        {title}
        {showDeleteBtn && (
          <button onClick={onDelete} className="btn btn-danger">
            x
          </button>
        )}
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0 text-white">
          <p className="card-text">{content}</p>
          <footer className="blockquote-footer text-white">{author}</footer>
        </blockquote>
      </div>
      <div className="card-footer text-left text-white small">
        Date Posted: {date}
      </div>
    </div>
  );
}

export default PostCard;
