import React from "react"

import styles from "./styles/print.module.scss"
import education from "@/data/education.json"

export const Education: React.FC = () => {
  return (
    <section>
      <h3>Education</h3>
      <hr />
      {Object.entries(education).map(([menu, edu], index) =>
        menu === "achievement" ? (
          <div key={index}>
            <p>{education.achievement.description}</p>
            <ul>
              {education.achievement.awards.map((award) => (
                <li key={award.title}>
                  {award.title}
                  <br />
                  {award.description}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div key={index} className={styles.history}>
            <p>{edu.year}</p>
            <div>
              <h5>{edu.degree}</h5>
              {edu.institution}
            </div>
          </div>
        )
      )}
    </section>
  )
}
