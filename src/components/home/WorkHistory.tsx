import React, { Fragment, useState } from "react"
import styles from "@/components/layout/styles/List.module.scss"
import { Details, Button } from "@/components/layout"
import { joinClasses } from "@/helpers"

import workHistory from "@/data/workHistory.json"

type Menu = "senior" | "mid" | "junior" | "intern"

export const WorkHistory: React.FC<{}> = (props) => {
  const [activeMenu, setActiveMenu] = useState<Menu>("senior")
  return (
    <Fragment>
      <blockquote>
        <Details title="Work History" shadow={true} className={styles.List}>
          <div className={styles.list}>
            {Object.entries(workHistory).map(([menu, label]) => (
              <ListItem
                key={menu}
                active={activeMenu === menu}
                onClick={() => {
                  setActiveMenu(menu as Menu)
                }}
              >
                <span>{label.title}</span>
                <small>{label.year}</small>
              </ListItem>
            ))}
          </div>
        </Details>
      </blockquote>

      <Details title={workHistory[activeMenu].title}>
        <div className={styles.body}>
          <p>{workHistory[activeMenu].company}</p>
          <p>{workHistory[activeMenu].year}</p>
          <hr />

          <ul>
            {workHistory[activeMenu].responsibilities.map((desc, index) => (
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
