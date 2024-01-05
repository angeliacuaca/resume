import React from "react"

import styles from "./styles/print.module.scss"
import workHistory from "@/data/workHistory.json"

export const WorkHistory: React.FC = () => {
  return (
    <section>
      <h3>Work History</h3>
      <hr />
      {Object.entries(workHistory).map(([_, work], index) => (
        <div key={index} className={styles.mb3}>
          <div className={styles.history}>
            <p>{work.year}</p>
            <div>
              <h5>{work.title}</h5>
              {work.company}
            </div>
          </div>

          <ul>
            {work.responsibilities.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
