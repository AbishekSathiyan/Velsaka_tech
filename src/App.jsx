import { React, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import AppRouter from "./Routes/AppRouter";

function App() {
  return <AppRouter />;
}

export default App;
