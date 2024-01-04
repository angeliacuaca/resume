import React, { Fragment, useState } from "react"
import styles from "../Components/styles/List.module.scss"
import { Details } from "../Components/Details"
import { Button } from "../Components/Button"
import { joinClasses } from "../helpers"

import printStyles from "./styles/Print.module.scss"
import workHistory from "../data/workHistory.json"

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

export const Print: React.FC<{}> = () => {
  return (
    <section>
      <h3>Work History</h3>
      <hr />
      {Object.entries(workHistory).map(([_, work], index) => (
        <div key={index} className={printStyles.mb3}>
          <div className={printStyles.history}>
            <p>{work.year}</p>
            <div>
              <h5>{work.title}</h5>
              {work.company}
            </div>
          </div>

          <ul>
            {work.responsibilities.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
