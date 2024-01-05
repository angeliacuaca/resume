import React from "react"
import styles from "./styles/Resume.module.scss"
import { Pattern } from "@/components/layout"
import { Content } from "./Content"

const Resume: React.FC<{}> = (props) => {
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

export default Resume
