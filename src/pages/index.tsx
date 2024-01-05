import React, { useEffect, useState } from "react"
import { NextPage } from "next"
import Resume from "@/components/home/Resume"

const Home: NextPage = () => {
  const [page, setPage] = useState(<div />)
  useEffect(() => {
    if (window.screen.width < 600) {
      window.location.href = "/print"
    } else {
      setPage(<Resume />)
    }
  }, [])

  return page
}

export default Home
