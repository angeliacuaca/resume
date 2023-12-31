import React, { useState } from "react"
import styles from "./styles/Content.module.scss"
import { Header } from "../Components/Header"
import { About } from "./About"
import { Skills } from "./Skills"
import { Education } from "./Education"
import { WorkHistory } from "./WorkHistory"
import { Referees } from "./Referees"
import { SideBar, ActiveMenu } from "../Components/Sidebar"
import { Projects } from "./Projects"

const COL_MAP = {
  about: 1,
  skills: 1,
  education: 2,
  "work-history": 2,
  projects: 2,
  referees: 1,
}

export const Content: React.FC<{}> = (props) => {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>("about")

  return (
    <div className={styles.Content}>
      <Header title="Angelia Cuaca" subtitle="Frontend Engineer" />

      <div
        className={styles.contentContainer}
        style={{
          gridTemplateColumns: `300px repeat(${COL_MAP[activeMenu]}, 1fr)`,
        }}
      >
        <SideBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        {activeMenu === "about" && <About />}
        {activeMenu === "skills" && <Skills />}
        {activeMenu === "education" && <Education />}
        {activeMenu === "work-history" && <WorkHistory />}
        {activeMenu === "projects" && <Projects />}
        {activeMenu === "referees" && <Referees />}
      </div>

      <div className={styles.Footer}>For print friendly version</div>
    </div>
  )
}
