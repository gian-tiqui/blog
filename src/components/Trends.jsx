import React, { useEffect, useState } from "react";

const convertToReadable = (count) => {
  const stringNum = `${count}`;

  if (stringNum.length < 4) {
    return stringNum;
  } else if (stringNum.length < 7) {
    const thousands = stringNum.slice(0, -3);
    return `${thousands}k`;
  } else if (stringNum.length < 10) {
    const millions = stringNum.slice(0, -6);
    return `${millions}M`;
  } else {
    const billions = stringNum.slice(0, -9);
    return `${billions}B`;
  }
};

function Trends() {
  const [trends, setTrends] = useState([]);

  const data = [
    {
      category: "Gaming",
      title: "Star Rail",
      postCount: 12345,
    },
    {
      category: "Gaming",
      title: "Star Rail",
      postCount: 12345,
    },
    {
      category: "Gaming",
      title: "Star Rail",
      postCount: 12345,
    },
    {
      category: "Gaming",
      title: "Star Rail",
      postCount: 12345,
    },
    {
      category: "Gaming",
      title: "Star Rail",
      postCount: 12345,
    },
  ];

  useEffect(() => {
    setTrends(data);
  }, []);

  return (
    <div className="card custom-card bg-dark my-3 py-2 px-3">
      <div className="card-title text-white">
        <h4>Trends for you</h4>
      </div>

      {trends.map((dat, index) => (
        <div
          className="d-flex justify-content-between align-items-center my-2"
          key={index}
        >
          <div>
            <h6 className="text-secondary mb-1 fs-14">{dat.category}</h6>
            <p
              className="text-white fw-bold fs-16 mb-0"
              style={{ fontWeight: "bold" }}
            >
              {dat.title}
            </p>
            <p className="text-secondary fs-10 mb-0">
              {convertToReadable(dat.postCount)} posts
            </p>
          </div>
          <i className="bi bi-three-dots text-secondary fs-16"></i>
        </div>
      ))}
    </div>
  );
}

export default Trends;
