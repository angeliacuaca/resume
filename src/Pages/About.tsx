import React from "react"
import styles from "../Components/styles/Details.module.scss"
import { Details } from "../Components/Details"

export const About: React.FC<{}> = (props) => {
  return (
    <Details title="About">
      <div className={styles.body}>
        <p>
          As a senior software engineer at PHORIA, I have over six years of
          experience with a proven track record of delivering high-quality web
          applications utilising TypeScript, Redux.js and Threejs. Adept at
          combining technical expertise with creative problem-solving, strong
          collaborator and effective communicator in dynamic team environments.
          I am always eager to learn new skills, collaborate with diverse teams,
          and contribute to PHORIA’s mission of transforming reality with
          creativity and innovation.
        </p>
        <p>
          Experienced and innovative Senior Frontend Developer with a proven
          track record of delivering high-quality web applications. Adept at
          combining technical expertise with creative problem-solving to enhance
          user experiences. Strong collaborator and effective communicator in
          dynamic team environments.
        </p>
      </div>
    </Details>
  )
}
