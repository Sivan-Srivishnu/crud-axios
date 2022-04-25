import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Posts from "./components/post/Posts";
import CreatePost from "./components/post/CreatePost";
import EditPost from "./components/post/EditPost";
import DeletePost from "./components/post/DeletePost";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/posts" element={<Posts/>} />
        <Route path="/create-post" element={<CreatePost/>} />
        <Route path="/edit-post/:id" element={<EditPost/>} />
        <Route path="/delete-post/:id" element={<DeletePost/>} />
      </Routes>
    </Router>
  );
};

export default App;
