import React from "react"
import styles from "./styles/Resume.module.scss"
import { Pattern } from "../Components/Pattern"
import { Content } from "./Content"

export const Resume: React.FC<{}> = (props) => {
  return (
    <div className={styles.Resume}>
      <div className={styles.container}>
        <Pattern />
        <Content />
        <Pattern />
      </div>
    </div>
  )
}
