import React, { Fragment, useState } from "react"
import styles from "@/components/layout/styles/List.module.scss"
import { Details, Button } from "@/components/layout"
import { joinClasses } from "@/helpers"
import education from "@/data/education.json"

type Menu = "py" | "postgraduate" | "undergraduate" | "achievement"

export const Education: React.FC<{}> = (props) => {
  const [activeMenu, setActiveMenu] = useState<Menu>("py")

  return (
    <Fragment>
      <blockquote>
        <Details title="Education" shadow={true} className={styles.List}>
          <div className={styles.list}>
            {Object.entries(education).map(([menu, label]) => (
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

      {activeMenu === "achievement" ? (
        <Details title={education.achievement.title}>
          <div className={styles.body}>
            <p>{education.achievement.description} </p>
            <ul>
              {education.achievement.awards.map((award) => (
                <li key={award.title}>
                  {award.title}
                  <br />
                  {award.description}
                </li>
              ))}
            </ul>
          </div>
        </Details>
      ) : (
        <Details title={education[activeMenu].title}>
          <div className={styles.body}>
            <p>{education[activeMenu].degree}</p>
            <p>{education[activeMenu].institution}</p>
            <hr />
            <p>{education[activeMenu].description}</p>
          </div>
        </Details>
      )}
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
