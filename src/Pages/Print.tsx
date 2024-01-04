import React, { useEffect } from "react"
import about from "../data/about.json"
import { joinClasses } from "../helpers"

import styles from "./styles/Print.module.scss"
import { Print as Skills } from "./Skills"
import { Print as WorkHistory } from "./WorkHistory"
import { Print as Projects } from "./Projects"
import { Print as Education } from "./Education"
import { Print as Referees } from "./Referees"

export const Print: React.FC<{}> = (props) => {
  useEffect(() => {
    const root = document.getElementById("body")
    if (root) {
      root.dataset.page = "print"
    }
  }, [])

  return (
    <div className={styles.Print}>
      <header>
        <h1 className={styles.title}>{about.name}</h1>
        <h2 className={styles.subtitle}>{about.title}</h2>
        <div className={joinClasses("print-hidden", styles.flex, styles.info)}>
          <h4>{about.mobile}</h4>
          <h4>
            <a href={`mailto:${about.email}`}>{about.email}</a>
          </h4>
          <h4 className="print-hidden">
            <a href={about.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </h4>
        </div>
        <div className="print-show">
          <p
            className={styles.grid2}
            style={{ gridTemplateColumns: "100px 1fr" }}
          >
            <span>Mobile:</span> <span>{about.mobile}</span>
          </p>
          <p
            className={styles.grid2}
            style={{ gridTemplateColumns: "100px 1fr" }}
          >
            <span>Email:</span>
            <a href={`mailto:${about.email}`}>{about.email}</a>
          </p>
          <p
            className={styles.grid2}
            style={{ gridTemplateColumns: "100px 1fr" }}
          >
            <span>Website:</span> <a href={about.website}>{about.website}</a>
          </p>
          <br />
        </div>
      </header>
      <section>
        <hr />
        <p>{about.description}</p>
      </section>
      <Skills />
      <WorkHistory />
      <Projects />
      <Education />
      <Referees />
    </div>
  )
}
