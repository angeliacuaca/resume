import React, { Fragment, useState } from "react"
import styles from "../Components/styles/List.module.scss"
import { Details } from "../Components/Details"
import { VerticalLine } from "../Components/VerticalLine"
import { Button } from "../Components/Button"
import { joinClasses } from "../helpers"

const MENU_MAP = {
  mtp: "Music Therapy Platform",
  punch: "Punch and Dodge",
  somo: "Somo",
  mootick: "Mootick",
}

export const Projects: React.FC<{}> = (props) => {
  const [activeMenu, setActiveMenu] = useState("mtp")
  return (
    <Fragment>
      <VerticalLine>
        <Details title="Projects" shadow={true} className={styles.List}>
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

      {activeMenu === "mtp" && (
        <Details title="Music Therapy Platform" className={styles.List}>
          <div className={styles.body}>
            <p>University Project - RMIT University</p>
            <p>
              Client: Prof. Katrina Skewes McFerran, The University of Melbourne
              – VIC
            </p>
            <hr />
            <p>
              A team project for web-based application about research-based
              practice and profession in which music is used to actively support
              people as they strive to improve their health, functioning and
              wellbeing.
            </p>
            <p>
              Responsibilities:
              <li>
                Assisted team in developing plans, ideas, business logic and
                weekly aims.
              </li>
              <li>
                Responsible for all Front-End, HTML5, CSS, Javascripts
                developing including graphic, animation and responsive elements.
              </li>
              <li>
                Designed interactive approach and development on therapy
                activities.
              </li>
            </p>
          </div>
        </Details>
      )}
      {activeMenu === "punch" && (
        <Details title="Punch and Dodge">
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
      {activeMenu === "somo" && (
        <Details title="Somo">
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
      {activeMenu === "mootick" && (
        <Details title="Mootick">
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
