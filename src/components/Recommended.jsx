import React, { useEffect, useState } from "react";

function Recommended() {
  const [users, setUsers] = useState([]);

  const data = [
    {
      name: "Michael Gian Tiqui",
    },
    {
      name: "Michael Gian Tiqui",
    },
    {
      name: "Michael Gian Tiqui",
    },
  ];

  useEffect(() => {
    setUsers(data);
  }, []);

  return (
    <div className="card custom-card bg-dark my-3 py-2 px-3">
      <div className="card-title text-white">
        <h4>You might like</h4>
      </div>

      {users.map((user, index) => (
        <div key={index} className="text-white p-2 row">
          <div className="col">
            <img src="" alt={user.name.slice(0, 1)}></img>
          </div>
          <div className="col name-col" style={{ fontSize: "13px" }}>
            {user.name}
          </div>
          <div className="col">
            <button
              className="btn btn-light rounded-pill"
              style={{ fontSize: "13px" }}
            >
              Follow
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recommended;
