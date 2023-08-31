import "./App.css"
import SectionTwo from "./sections/sections/SectionTwo"
import SectionOne from "./sections/sections/SectionOne"
import SectionThree from "./sections/sections/SectionThree"
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
