import React from "react"
import { Details } from "@/components/layout"
import styles from "@/components/layout/styles/Details.module.scss"
import skills from "@/data/skills.json"
import { joinClasses } from "@/helpers"

export const Skills: React.FC<{}> = (props) => {
  return (
    <Details title="Skills">
      <div className={styles.body}>
        <p>Languages and frameworks:</p>
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
      </div>
    </Details>
  )
}
