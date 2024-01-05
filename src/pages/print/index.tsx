import { NextPage } from "next"
import styles from "./styles/index.module.scss"

import { Skills } from "@/components/print/Skills"
import { WorkHistory } from "@/components/print/WorkHistory"
import { Projects } from "@/components/print/Projects"
import { Education } from "@/components/print/Education"
import { Referees } from "@/components/print/Referees"
import { About } from "@/components/print/About"

export async function getStaticProps() {
  return { props: { isPrint: true } }
}

const Print: NextPage = () => {
  return (
    <div className={styles.Print}>
      <About />
      <Skills />
      <WorkHistory />
      <Projects />
      <Education />
      <Referees />
    </div>
  )
}

export default Print
