import React, { Fragment, useState } from "react"
import styles from "../Components/styles/List.module.scss"
import { Details } from "../Components/Details"
import { Button } from "../Components/Button"
import { joinClasses } from "../helpers"

import printStyles from "./styles/Print.module.scss"
import projects from "../data/projects.json"

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

          <p>
            <ul>
              {projects[activeMenu].responsibilities.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </p>
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
      <h3>Projects</h3>
      <hr />
      {Object.entries(projects).map(([_, project]) => (
        <div className={printStyles.mb2}>
          <div className={printStyles.mb1}>
            <h4>{project.title}</h4>
          </div>
          <p className={printStyles.mb1}>{project.description}</p>
          <p>
            <ul>
              {project.responsibilities.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </section>
  )
}
