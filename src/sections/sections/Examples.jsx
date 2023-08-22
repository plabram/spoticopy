import { sampleVideos } from "../../content/sampleVideos"
import SectionTemplate from "../sectionTemplates/SectionTemplate"
import SliderWithLabels from '../../components/SliderWithLabels'
import { useState } from "react"
import Carrousel from "../../components/Carrousel"


const Examples = ({ videos }) => {
  const categories = ["Gráficos 3D", "Gráficos 2D", "Combinación de medios", "Vídeo"]
  const [carouselVideos, setCarouselVideos] = useState(sampleVideos.slice(0, 6))

  const handleClick = (e) => {

    const videosToFilter = [...videos]
    const selectedCategory = e.target.value
    const setNewVideosByCategory = (arr, filter) => {
      const filteredArr = arr.filter(i => i.category === filter)
      setCarouselVideos(filteredArr.slice(0, 6))
    }
    setNewVideosByCategory(videosToFilter, selectedCategory)
  }

  return (
    <SectionTemplate background="#141414">
      <h2>Ejemplos</h2>
      <Carrousel videos={carouselVideos} explanation="Intenta empezar y acabar con el mismo fotograma para conseguir un bucle continuo." />
      <SliderWithLabels values={categories} handleClick={handleClick} />
    </SectionTemplate >
  )
}

export default Examples