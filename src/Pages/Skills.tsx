import React from "react"
import { Details } from "../Components/Details"
import styles from "../Components/styles/Details.module.scss"

export const Skills: React.FC<{}> = (props) => {
  return (
    <Details title="Skills">
      <div className={styles.body}>
        <p>
          <ul>
            <li>
              Programming: Java (OOP and Network), Swift (Xcode), Android
              Studio.
            </li>
            <li>
              Web Programming: HTML5, CSS3, PHP, JavaScripts (JQuery, AJAX,
              JSON).
            </li>
            <li>Web Services: Firebase, Amazon AWS, Google Cloud, REST API.</li>
            <li>Database: SQL, CoreData, Amazon and Google Cloud Storage.</li>
            <li>Other: Adobe Creative Suite, Autodesk Maya, ZBrush.</li>
            <li>
              Familiar with Agile methodology and Scrum principle as well as
              design pattern and algorithm implementation.
            </li>
            <li>
              Capabilities on Network socket-client programming Capabilities of
              website design and developing (Front End).
            </li>
            <li>
              Capabilities of mobile application developing (iOS and Android).
            </li>
            <li>
              Work interchangeably on both Windows and Mac OSX. Excellent
              written and interpersonal skills develop through presentation on
              products.
            </li>
            <li> Self-driven, love challenges and willing to learn.</li>
            <li>
              Strong knowledge in animation (2D & 3D), graphic processing and
              video editing.
            </li>
          </ul>
        </p>
      </div>
    </Details>
  )
}
