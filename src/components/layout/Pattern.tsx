import React from "react"
import styles from "./styles/Pattern.module.scss"

export const Pattern: React.FC<{}> = () => {
  return (
    <div className={styles.Pattern}>
      <div className={styles.container} />
      <div className={styles.inner} />
    </div>
  )
}
