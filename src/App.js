import React from "react";
import Home from "./pages/Home";
import "./App.css";
import FileDetails from "./pages/FileDetails";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoarsh";
import FileDashBoard from "./pages/FileDashBoard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FileList from "./pages/FileList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>

      <Route path="/file/:id" element={<FileDetails />}></Route>
      <Route path="/dashboard" element={<DashBoard />}></Route>
      <Route path="/dashboard/files" element={<FileDashBoard />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard/fileList" element={<FileList />}></Route>
    </Routes>
  );
};

export default App;
