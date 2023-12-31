import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.scss"
import { Resume } from "./Pages/Resume"
import reportWebVitals from "./reportWebVitals"
import { sendToVercelAnalytics } from "./vitals"

ReactDOM.render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals(sendToVercelAnalytics)
