import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/App" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);