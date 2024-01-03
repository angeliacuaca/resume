import React, { Fragment, useState } from "react"
import styles from "../Components/styles/List.module.scss"
import { Details } from "../Components/Details"
import { Button } from "../Components/Button"
import { joinClasses } from "../helpers"
import printStyles from "./styles/Print.module.scss"
import education from "../data/education.json"

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
            <p>
              {education.achievement.description}
              <ul>
                {education.achievement.awards.map((award) => (
                  <li key={award.title}>
                    {award.title}
                    <br />
                    {award.description}
                  </li>
                ))}
              </ul>
            </p>
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

export const Print: React.FC<{}> = () => {
  return (
    <section>
      <h3>Education</h3>
      <hr />
      {Object.entries(education).map(([menu, edu]) =>
        menu === "achievement" ? (
          <div>
            <p>{education.achievement.description}</p>
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
        ) : (
          <div className={printStyles.history}>
            <p>{edu.year}</p>
            <p>
              <h5>{edu.degree}</h5>
              {edu.institution}
            </p>
          </div>
        )
      )}
    </section>
  )
}
