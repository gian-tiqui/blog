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
                <Link
                  to="/"
                  className="nav-link d-flex align-items-center px-0 text-white"
                >
                  <i className="fs-4 bi-house text-white"></i>
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link d-flex align-items-center px-0 text-white"
                >
                  <i className="fs-4 bi-search text-white"></i>
                  <span className="ms-1 d-none d-sm-inline">Explore</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link d-flex align-items-center px-0 text-white"
                >
                  <i className="fs-4 bi-mailbox text-white"></i>
                  <span className="ms-1 d-none d-sm-inline">Message</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link d-flex align-items-center px-0 text-white"
                >
                  <i className="fs-4 bi-list-task text-white"></i>
                  <span className="ms-1 d-none d-sm-inline">List</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link d-flex align-items-center px-0 text-white"
                >
                  <i className="fs-4 bi-bookmark text-white"></i>
                  <span className="ms-1 d-none d-sm-inline">Bookmark</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link d-flex align-items-center px-0 text-white"
                >
                  <i className="fs-4 bi-people-fill text-white"></i>
                  <span className="ms-1 d-none d-sm-inline">People</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link d-flex align-items-center px-0 text-white"
                >
                  <i className="fs-4 bi-moon-stars-fill text-white"></i>
                  <span className="ms-1 d-none d-sm-inline">Premium</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link d-flex align-items-center px-0 text-white"
                >
                  <i className="fs-4 bi-person-fill text-white"></i>
                  <span className="ms-1 d-none d-sm-inline">Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link d-flex align-items-center px-0 text-white"
                >
                  <i className="fs-4 bi-three-dots text-white"></i>
                  <span className="ms-1 d-none d-sm-inline">More</span>
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
        <div className="col light-border">
          <div className="row light-border pt-3">
            <div className="col text-white d-flex justify-content-center font-weight-bold">
              <p>For you</p>
            </div>
            <div className="col text-white d-flex justify-content-center font-weight-bold">
              <p>Following</p>
            </div>
            <div className="col col-sm-1 text-white d-flex justify-content-center">
              <i className="bi bi-gear"></i>{" "}
            </div>
          </div>
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
              <div className="input-group rounded-pill bg-dark">
                <span
                  className="input-group-text bg-dark border-0"
                  style={{ borderRadius: "20px 0px 0px 20px" }}
                >
                  <i
                    className="bi bi-search text-secondary"
                    style={{ color: "gray" }}
                  ></i>
                </span>
                <input
                  type="text"
                  className="form-control border-0 bg-dark text-secondary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-icon"
                  style={{ borderRadius: "0px 20px 20px 0px" }}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card mt-3 bg-dark text-white custom-card">
              <div class="card-body">
                <h5 class="card-title">Subscribe to Premium</h5>
                <p class="card-text">
                  Subscribe to unlock new features and if eligible, receive a
                  share of ads revenue.
                </p>
                <button href="#" class="btn btn-success">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
