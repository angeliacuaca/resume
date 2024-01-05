import React from "react"
import styles from "./styles/Details.module.scss"
import { joinClasses } from "@/helpers"

type Props = {
  title: string
  children: React.ReactNode
  shadow?: boolean
  className?: string
}

export const Details: React.FC<Props> = (props) => {
  const { title, children, shadow, className } = props

  return (
    <div
      className={joinClasses(
        styles.Details,
        shadow && styles.shadow,
        className
      )}
    >
      <div className={styles.header}>
        <i className="fa-solid fa-square-full"></i>
        {title}
      </div>
      {children}
    </div>
  )
}
