import React from "react";

function formatDateToWordDate(inputDate) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(inputDate);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

function formatToWordDay(inputDate) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(inputDate);
  const day = days[date.getDay()];

  return day;
}

function PostCard({
  content,
  onDelete,
  showDeleteBtn,
  author,
  date,
  photoURL,
}) {
  const iconStyle = { color: "white" };
  const wordDate = formatDateToWordDate(date);

  const photoStyle = {
    width: "40px",
    height: "40px",
  };

  return (
    <div className="bg-black text-light light-border custom-card-2 p-3">
      <div className="row">
        <div className="col-13 col-sm-1">
          <img
            src={photoURL}
            alt={author}
            className="user-photo rounded-circle img-fluid"
            style={photoStyle}
          />
        </div>
        <div className="col-12 col-sm-10">
          <p className="mb-0 text-secondary">
            <strong className="text-white">{author}</strong> - {wordDate}
          </p>
          <p>{content}</p>
        </div>
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-2 col-sm-2 d-flex justify-content-end">
          <i className="bi bi-chat" style={iconStyle}></i>
        </div>
        <div className="col-2 col-sm-2 d-flex justify-content-end">
          <i className="bi bi-arrow-repeat" style={iconStyle}></i>
        </div>
        <div className="col-2 col-sm-2 d-flex justify-content-end">
          <i className="bi bi-heart" style={iconStyle}></i>
        </div>
        <div className="col-2 col-sm-2 d-flex justify-content-end">
          <i className="bi bi-text-left" style={iconStyle}></i>
        </div>
        <div className="col-2 col-sm-2 d-flex justify-content-end">
          <i className="bi bi-bookmark" style={iconStyle}></i>
        </div>
        <div className="col-2 col-sm-2 d-flex justify-content-end">
          <i className="bi bi-upload text-secondary" style={iconStyle}></i>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
