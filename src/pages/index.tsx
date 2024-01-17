import React, { useEffect, useState } from "react"
import { NextPage } from "next"
import Resume from "@/components/home/Resume"
import Print from "./print"

const Home: NextPage = () => {
  const [page, setPage] = useState(<div />)

  const handleScreenWidth = () => {
    if (window.screen.width < 1080) {
      setPage(<Print />)
    } else {
      setPage(<Resume />)
    }
  }

  useEffect(() => {
    window.addEventListener("load", handleScreenWidth)
    window.addEventListener("resize", handleScreenWidth)

    return () => {
      window.removeEventListener("load", handleScreenWidth)
      window.removeEventListener("resize", handleScreenWidth)
    }
  }, [page])

  return page
}

export default Home
