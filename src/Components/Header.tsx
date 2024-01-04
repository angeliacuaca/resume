import React from "react"
import styles from "./styles/Header.module.scss"

type Props = {
  title: string
  subtitle?: string
}
export const Header: React.FC<Props> = (props) => {
  const { title, subtitle } = props
  return (
    <div className={styles.Header}>
      <h1>
        <span>{title}</span>
        {subtitle && <small>{subtitle}</small>}
      </h1>
    </div>
  )
}
