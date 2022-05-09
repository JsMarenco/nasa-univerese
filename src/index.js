import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { ThemeProvider } from "@mui/material";
import dark from "./theme/dark";

import Home from "./views/Home";
import ErrorPage from "./views/ErrorPage";
import APOD from "./views/APOD";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={dark}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/picture-of-the-day" element={<APOD />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
