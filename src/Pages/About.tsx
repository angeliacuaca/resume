import React from "react"
import styles from "../Components/styles/Details.module.scss"
import { Details } from "../Components/Details"
import about from "../data/about.json"

export const About: React.FC<{}> = (props) => {
  return (
    <Details title="About">
      <div className={styles.body}>
        <div className={styles.grid3}>
          <div>
            <p>
              Contact:
              <ul>
                <li>{about.mobile}</li>
                <li>
                  <a href={`mailto:${about.email}`}>{about.email}</a>
                </li>
              </ul>
            </p>
          </div>
          <div>
            <p>
              <a href={about.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <hr />

        <p>{about.description}</p>
      </div>
    </Details>
  )
}
