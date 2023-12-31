import React from "react"
import styles from "../Components/styles/Details.module.scss"
import { Details } from "../Components/Details"

export const Referees: React.FC<{}> = (props) => {
  return (
    <Details title="Referees">
      <div className={styles.body}>
        <p>Referees available upon request.</p>
      </div>
    </Details>
  )
}
