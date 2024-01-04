import React from "react"
import { createRoot } from "react-dom/client"
import "./styles/index.scss"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Resume } from "./Pages/Resume"
import reportWebVitals from "./reportWebVitals"
import { sendToVercelAnalytics } from "./vitals"
import { Print } from "./Pages/Print"

const container = document.getElementById("root")
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/print" element={<Print />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals(sendToVercelAnalytics)
