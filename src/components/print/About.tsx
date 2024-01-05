import React from "react"

import styles from "./styles/print.module.scss"
import about from "@/data/about.json"
import { joinClasses } from "@/helpers"

export const About: React.FC = () => {
  return (
    <>
      <header>
        <h1 className={styles.title}>{about.name}</h1>
        <div className={styles.flex}>
          <h2 className={styles.subtitle}>{about.title}</h2>
          <div className={joinClasses("print-hidden", styles.info)}>
            <a href={about.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            |
            <a href={about.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="print-show">
          <p
            className={styles.grid2}
            style={{ gridTemplateColumns: "100px 1fr" }}
          >
            <span>Website:</span> <a href={about.website}>{about.website}</a>
          </p>
          <p
            className={styles.grid2}
            style={{ gridTemplateColumns: "100px 1fr" }}
          >
            <span>LinkedIn:</span>
            <a href={about.linkedin}>{about.linkedin}</a>
          </p>
          <br />
        </div>
      </header>
      <section>
        <hr />
        <p>{about.description}</p>
      </section>
    </>
  )
}
