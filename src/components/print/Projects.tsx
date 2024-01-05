import React from "react"

import styles from "./styles/print.module.scss"
import projects from "@/data/projects.json"

export const Projects: React.FC = () => {
  return (
    <section>
      <h3>Projects</h3>
      <hr />
      {Object.entries(projects).map(([_, project], index) => (
        <div key={index} className={styles.mb3}>
          <div className={styles.mb1}>
            <h4>{project.title}</h4>
          </div>
          <p
            className={styles.mb1}
            dangerouslySetInnerHTML={{
              __html: project.description,
            }}
          />
          <ul>
            {project.responsibilities.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
