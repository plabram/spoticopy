import './App.css'
import Examples from './sections/sections/Examples'
import Hero from './sections/sections/Hero'
import Steps from './sections/sections/Steps'
import Header from './sections/Header'
import Footer from './sections/Footer'
import { useState, useEffect } from 'react'

function App() {

  const [videos, setVideos] = useState()

  useEffect(() => {

    const getVideos = async () => {

      try {
        const data = await fetch("https://64d93689e947d30a260a0107.mockapi.io/api/Videos")
        const dataToJson = await data.json()
        setVideos(dataToJson)

      }
      catch (error) { console.log("error:", error) }

    }

    getVideos()
  }, [])

  return (
    <>
      <Header />
      <Hero videos={videos} />
      <Examples videos={videos} />
      <Steps />
      <Footer />
    </>
  )
}

export default App
