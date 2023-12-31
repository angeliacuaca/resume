import React, { Fragment, useState } from "react"
import styles from "../Components/styles/List.module.scss"
import { Details } from "../Components/Details"
import { VerticalLine } from "../Components/VerticalLine"
import { Button } from "../Components/Button"
import { joinClasses } from "../helpers"

const MENU_MAP = {
  postgraduate: "Postgraduate",
  undergraduate: "Undergraduate",
  achievement: "Achievements",
}

export const Education: React.FC<{}> = (props) => {
  const [activeMenu, setActiveMenu] = useState("undergraduate")
  return (
    <Fragment>
      <VerticalLine>
        <Details title="Education" shadow={true} className={styles.List}>
          <div className={styles.list}>
            {Object.entries(MENU_MAP).map(([menu, label]) => (
              <ListItem
                active={activeMenu === menu}
                onClick={() => {
                  setActiveMenu(menu)
                }}
              >
                {label}
              </ListItem>
            ))}
          </div>
        </Details>
      </VerticalLine>

      {activeMenu === "postgraduate" && (
        <Details title="Postgraduate">
          <div className={styles.body}>
            <p>RMIT University</p>
            <p>Master’s Degree, Information Technology</p>
            <hr />
            <p>Grade: with High Distinction</p>
            <p>Activities and societies: Outdoor Club</p>
            <p>
              Study focus more on Mobile Developing (iOS and Android) also Web
              (Front-End/Back-End) Developing.
            </p>
          </div>
        </Details>
      )}
      {activeMenu === "undergraduate" && (
        <Details title="Undergraduate">
          <div className={styles.body}>
            <p>RMIT University</p>
            <p>Bachelor's Degree, Animation and Interactive Media</p>
            <hr />
            <p>
              I did more on 3D animation mostly character animation and 3D
              environmental modeling.
            </p>
          </div>
        </Details>
      )}
      {activeMenu === "achievement" && (
        <Details title="Achievement">
          <div className={styles.body}>
            <p>
              agIdeas NewStar 2013 International Design Competition
              <br />
              Multimedia Entry finalist Melbourne Exhibition and Convention
              Center – Melbourne, VIC.
            </p>
            <hr />
            <p>
              Best 3D Animation Production 2012
              <br />
              RMIT Graduation Screening at ACMI.
            </p>
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
