import React from "react"
import styles from "@/components/layout/styles/Details.module.scss"
import { Details } from "@/components/layout"

export const Referees: React.FC<{}> = (props) => {
  return (
    <Details title="Referees">
      <div className={styles.body}>
        <p>Referees available upon request.</p>
      </div>
    </Details>
  )
}
