import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.scss"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Resume } from "./Pages/Resume"
import reportWebVitals from "./reportWebVitals"
import { sendToVercelAnalytics } from "./vitals"
import { Print } from "./Pages/Print"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/print" element={<Print />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals(sendToVercelAnalytics)
