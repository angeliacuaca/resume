import React from "react"
import styles from "@/components/layout/styles/Details.module.scss"
import { Details } from "@/components/layout"
import about from "@/data/about.json"

export const About: React.FC = (props) => {
  return (
    <Details title="About">
      <div className={styles.body}>
        <p>{about.description}</p>
      </div>
    </Details>
  )
}
