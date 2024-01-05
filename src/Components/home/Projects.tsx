import React, { Fragment, useState } from "react"
import styles from "@/components/layout/styles/List.module.scss"
import { Details, Button } from "@/components/layout"
import { joinClasses } from "@/helpers"

import projects from "@/data/projects.json"

type Menu = "mtp" | "cs" | "layoutEngine"

export const Projects: React.FC<{}> = (props) => {
  const [activeMenu, setActiveMenu] = useState<Menu>("cs")
  return (
    <Fragment>
      <blockquote>
        <Details title="Projects" shadow={true} className={styles.List}>
          <div className={styles.list}>
            {Object.entries(projects).map(([menu, label]) => (
              <ListItem
                key={menu}
                active={activeMenu === menu}
                onClick={() => {
                  setActiveMenu(menu as Menu)
                }}
              >
                {label.title}
              </ListItem>
            ))}
          </div>
        </Details>
      </blockquote>

      <Details title={projects[activeMenu].title}>
        <div className={styles.body}>
          <p
            dangerouslySetInnerHTML={{
              __html: projects[activeMenu].description,
            }}
          />
          <hr />

          <ul>
            {projects[activeMenu].responsibilities.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      </Details>
    </Fragment>
  )
}

const ListItem: React.FC<{
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
      <Button>{children}</Button>
    </div>
  )
}
