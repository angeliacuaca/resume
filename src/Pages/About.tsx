import React from "react"
import styles from "../Components/styles/Details.module.scss"
import { Details } from "../Components/Details"
import about from "../data/about.json"
import { joinClasses } from "../helpers"

export const About: React.FC<{}> = (props) => {
  return (
    <Details title="About">
      <div className={styles.body}>
        <div>
          <p>Contact: </p>
          <ul
            className={joinClasses("no-bullet", styles.grid2, styles.gridFlow)}
          >
            <li>
              <a href="tel:+61425188266" className="with-icon">
                <i className="fa-solid fa-square-phone fa-xl" />
              </a>
              <a href="tel:+61425188266">{about.mobile}</a>
            </li>
            <li>
              <a href={`mailto:${about.email}`} className="with-icon">
                <i className="fa-solid fa-square-envelope fa-xl" />
              </a>
              <a href={`mailto:${about.email}`}>{about.email}</a>
            </li>
            <li>
              <a
                href={about.linkedin}
                target="_blank"
                rel="noreferrer"
                className="with-icon"
              >
                <i className="fa-brands fa-linkedin fa-xl" />
              </a>
              <a href={about.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <hr />

        <p>{about.description}</p>
      </div>
    </Details>
  )
}
