import "./App.css"
import SectionTwo from "./sections/sections/Section02"
import SectionOne from "./sections/sections/Section01"
import SectionThree from "./sections/sections/Section03"
import Header from "./sections/Header"
import Footer from "./sections/Footer"
import { useState, useEffect } from "react"
import { getVideos } from "./api/call"

function App() {
  const [videos, setVideos] = useState()

  useEffect(() => {
    getVideos(setVideos)
  }, [])

  return (
    <>
      <Header />
      <SectionOne videos={videos} />
      <SectionTwo videos={videos} />
      <SectionThree />
      <Footer />
    </>
  )
}

export default App
