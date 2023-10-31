import React, { useState } from "react";
import { signOut, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../server/database";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import Home from "../pages/Home";
import CreatePost from "../pages/CreatePost";

import Trends from "./Trends";

function Sidebar() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
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
                <div className="mt-4 text-center mb-3">
                  <Link to="/createpost">
                    <button className="btn btn-success rounded-pill px-auto">
                      Post
                    </button>
                  </Link>
                </div>
              )}
            </ul>

            <div className="nav-bottom">
              {!isAuth ? (
                <button
                  className="btn bg-info rounded-pill text-white my-3 px-5  d-flex align-items-center"
                  onClick={signInWithGoogle}
                >
                  <span
                    className="ms-1 d-none d-sm-inline"
                    style={{ fontWeight: "bold" }}
                  >
                    Login
                  </span>
                </button>
              ) : (
                <div className="bg-black">
                  {auth.currentUser ? (
                    <Dropdown>
                      <Dropdown.Toggle
                        className="btn btn-black text-white my-4 d-flex align-items-center"
                        variant="transparent"
                        id="dropdown-basic"
                      >
                        <>
                          {auth.currentUser ? (
                            <>
                              {auth.currentUser.photoURL ? (
                                <img
                                  src={auth.currentUser.photoURL}
                                  alt={auth.currentUser.displayName}
                                  className="rounded-circle user-profile-img"
                                  style={{ width: "36px", height: "36px" }}
                                />
                              ) : (
                                <i className="fs-4 bi-bootstrap"></i>
                              )}
                              <span className="ms-2 d-none d-sm-inline">
                                {auth.currentUser.displayName}
                              </span>
                            </>
                          ) : (
                            "Login"
                          )}
                        </>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={signUserOut}>
                          <span className="text-dark">Logout</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    "Login"
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col light-border" style={{ padding: 0 }}>
          <div className="row light-border pt-3 mx-auto">
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
          <div className="col">
            <CreatePost isAuth={isAuth} />
          </div>
          <Routes>
            <Route path="/" element={<Home isAuth={isAuth} />} />
            <Route
              path="/createpost"
              element={<CreatePost isAuth={isAuth} />}
            />
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
            <div className="card mt-3 bg-dark text-white custom-card">
              <div className="card-body">
                <h5 className="card-title">Subscribe to Premium</h5>
                <p className="card-text">
                  Subscribe to unlock new features and if eligible, receive a
                  share of ads revenue.
                </p>
                <button href="#" className="btn btn-success rounded-pill px-4">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <Trends />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
