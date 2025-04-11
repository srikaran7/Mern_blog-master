// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import CreatePost from './pages/CreatePost.jsx';
import EditPost from './pages/EditPost.jsx';
import PostDetails from './pages/PostDetails.jsx';
import MyBlogs from './pages/MyBlogs.jsx';
import Profile from './pages/Profile.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

const App = () => {
  return (
    <ErrorBoundary>
      <Navbar />
      <div className="bg-green-500 text-white text-3xl p-4 text-center">
  Tailwind is working!
</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/myblogs" element={<MyBlogs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </ErrorBoundary>
  );
};

export default App;

