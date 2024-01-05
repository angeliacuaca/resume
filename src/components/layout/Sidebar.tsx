import React from "react"

import { Button } from "./Button"
import { joinClasses } from "@/helpers"
import styles from "./styles/Sidebar.module.scss"

export type ActiveMenu =
  | "about"
  | "skills"
  | "education"
  | "work-history"
  | "projects"
  | "referees"

const MENU = {
  about: "About",
  skills: "Skills",
  "work-history": "Work History",
  projects: "Projects",
  education: "Education",
  referees: "Referees",
}

export const Sidebar: React.FC<{
  activeMenu: ActiveMenu
  setActiveMenu: (menu: ActiveMenu) => void
}> = (props) => {
  const { activeMenu, setActiveMenu } = props
  return (
    <div className={styles.Sidebar}>
      <blockquote>
        {Object.entries(MENU).map(([menu, label]) => (
          <SideBarItem
            key={menu}
            active={activeMenu === menu}
            onClick={() => {
              setActiveMenu(menu as ActiveMenu)
            }}
          >
            {label}
          </SideBarItem>
        ))}
      </blockquote>
    </div>
  )
}

const SideBarItem: React.FC<{
  active: boolean
  onClick: () => void
  children: React.ReactNode
}> = (props) => {
  const { active, onClick, children } = props

  return (
    <div
      className={joinClasses(styles.sidebarItem, active && styles.active)}
      onClick={onClick}
    >
      <Button>
        <i className="fa-solid fa-square-full"></i>
        {children}
      </Button>
    </div>
  )
}
