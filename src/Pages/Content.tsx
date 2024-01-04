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
import about from "../data/about.json"

const MENU_MAP = {
  about: { cols: 1, component: <About /> },
  skills: { cols: 1, component: <Skills /> },
  "work-history": { cols: 2, component: <WorkHistory /> },
  education: { cols: 2, component: <Education /> },
  projects: { cols: 2, component: <Projects /> },
  referees: { cols: 1, component: <Referees /> },
}

export const Content: React.FC<{}> = () => {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>("about")

  return (
    <div className={styles.Content}>
      <Header title={about.name} subtitle={about.title} />

      <div
        className={styles.contentContainer}
        style={{
          gridTemplateColumns: `300px repeat(${MENU_MAP[activeMenu].cols}, 1fr)`,
        }}
      >
        <SideBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        {MENU_MAP[activeMenu].component}
      </div>

      <div className={styles.Footer}>
        <a target="_blank" href="/print">
          Print version
        </a>

        <div className={styles.right}>
          <small>
            Design inspiration:
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.platinumgames.com/official-blog/article/9624"
            >
              NieR:Automata
            </a>
          </small>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/angeliacuaca/resume"
            title="View this page on GitHub"
            className="with-icon"
          >
            <i className="fa-brands fa-square-github fa-2xl" />
          </a>
        </div>
      </div>
    </div>
  )
}
