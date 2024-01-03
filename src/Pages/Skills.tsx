import React from "react"
import { Details } from "../Components/Details"
import styles from "../Components/styles/Details.module.scss"
import printStyles from "./styles/Print.module.scss"
import skills from "../data/skills.json"

export const Skills: React.FC<{}> = (props) => {
  return (
    <Details title="Skills">
      <div className={styles.body}>
        <div className={styles.grid2}>
          <p>
            Languages:
            <ul>
              {skills.languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </p>
          <p>
            Frameworks:
            <ul>
              {skills.frameworks.map((framework) => (
                <li key={framework}>{framework}</li>
              ))}
            </ul>
          </p>
        </div>
        <p>
          <ul>
            {skills.others.map((other, i) => (
              <li key={i}>{other}</li>
            ))}
          </ul>
        </p>
      </div>
    </Details>
  )
}

export const Print: React.FC<{}> = () => {
  return (
    <section>
      <h3>Skills</h3>
      <hr />
      <div className={printStyles.grid2}>
        <p>
          Languages:
          <ul>
            {skills.languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </p>
        <p>
          Frameworks:
          <ul>
            {skills.frameworks.map((framework) => (
              <li key={framework}>{framework}</li>
            ))}
          </ul>
        </p>
      </div>
      <p>
        <ul>
          {skills.others.map((other, i) => (
            <li key={i}>{other}</li>
          ))}
        </ul>
      </p>
    </section>
  )
}
