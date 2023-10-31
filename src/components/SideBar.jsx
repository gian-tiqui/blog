import React from "react";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../server/database";
import Home from "../pages/Home";
import CreatePost from "../pages/CreatePost";
import Login from "../pages/Login";
import { Routes, Route, Link } from "react-router-dom";

function Sidebar() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-black">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">
                <h1>Blog</h1>
              </span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
              style={{ flex: 1 }}
            >
              <li className="nav-item">
                <Link to="/" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </Link>
              </li>
              {isAuth && (
                <li>
                  <Link
                    to="/createpost"
                    className="nav-link px-0 align-middle"
                    style={{ marginBottom: "auto" }}
                  >
                    <i className="fs-4 bi-speedometer2"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Post</span>
                  </Link>
                </li>
              )}
            </ul>
            <div className="nav-bottom">
              {!isAuth ? (
                <Link to="/login" className="nav-link px-0">
                  <i className="fs-4 bi-table"></i>
                  <span className="ms-1 d-none d-sm-inline">Login</span>
                </Link>
              ) : (
                <button
                  className="btn btn-dark text-white my-4"
                  onClick={signUserOut}
                >
                  <i className="fs-4 bi-bootstrap"></i>
                  <span className="ms-1 d-none d-sm-inline">Logout</span>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="col py-3 light-border">
          <Routes>
            <Route path="/" element={<Home isAuth={isAuth} />} />
            <Route
              path="/createpost"
              element={<CreatePost isAuth={isAuth} />}
            />
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          </Routes>
        </div>
        <div className="col p-3 col-sm-3">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="rounded bg-dark text-white"
                placeholder="Search"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
