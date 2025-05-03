import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import List from "./components/List";
import Channel from "./components/Channel";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<List />} />
    </Routes>
  </BrowserRouter>
);
