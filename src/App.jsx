import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./server/database";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav className="d-flex justify-content-center p-2 bg-secondary">
        <div className="d-flex flex-column flex-md-row container rounded row p-2">
          <Link to="/" className="col btn bg-dark text-white mb-2 mb-md-0 mx-2">
            Home
          </Link>
          {!isAuth ? (
            <></>
          ) : (
            <Link
              to="/createpost"
              className="col btn bg-dark text-white mb-2 mb-md-0 mx-2"
            >
              Create Post
            </Link>
          )}

          {!isAuth ? (
            <Link to="/login" className="col btn bg-dark text-white mx-2">
              Login
            </Link>
          ) : (
            <button
              className="col btn bg-dark text-white mx-2"
              onClick={signUserOut}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
