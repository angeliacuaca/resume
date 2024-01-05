import React from "react"
import styles from "./styles/Button.module.scss"

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode
}
export const Button: React.FC<Props> = (props) => {
  const { children } = props

  return <button className={styles.Button}>{children}</button>
}
