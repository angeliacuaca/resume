import React from "react"
import styles from "./styles/print.module.scss"
import skills from "@/data/skills.json"
import { joinClasses } from "@/helpers"

export const Skills: React.FC = () => {
  return (
    <section>
      <h3>Skills</h3>
      <hr />

      <p>Languages and frameworks: </p>
      <ul className={joinClasses(styles.grid2, styles.gridFlow)}>
        {skills.languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
        {skills.frameworks.map((framework) => (
          <li key={framework}>{framework}</li>
        ))}
      </ul>

      <ul>
        {skills.others.map((other, i) => (
          <li key={i}>{other}</li>
        ))}
      </ul>
    </section>
  )
}
