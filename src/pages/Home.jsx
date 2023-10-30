import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionReference = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs("posts");
    };
  });
  return <div>Home</div>;
}

export default Home;
