import React from "react";
import Sidebar from "./components/SideBar";

function App() {
  const n = 9;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
