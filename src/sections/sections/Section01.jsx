import SectionTemplate from "../sectionTemplates/SectionTemplate"
import PhoneFrame from "../../components/PhoneFrame"
import { styled } from "styled-components"
import Slider from "../../components/Slider"
import { useState, useEffect } from "react"
import { device } from "../../breakpoints"
import { sampleVideos } from "../../content/sampleVideos"

const SectionOneDiv = styled.div`
  padding-right: 64px;

  @media ${device.mobile} {
    padding: 0;
  }
`

const SectionOneFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`

const SectionOne = ({ videos }) => {
  const [heroVideo, setHeroVideo] = useState(sampleVideos[2])
  const [videoID, setVideoID] = useState(3)

  const handleClick = (e) => {
    setVideoID(e.target.value)
    console.log(videoID)
  }

  useEffect(() => {
    const getVideo = (uuid) => {
      if (videos) {
        const apiVideo = videos.filter((video) => video.id == uuid)
        setHeroVideo(apiVideo[0])
      }
    }
    getVideo(videoID)
  }, [videoID])

  return (
    <SectionTemplate col="2">
      <SectionOneDiv>
        <h1>Sorprende </h1>
        <br />
        <h1>
          <em>a tus fans.</em>
        </h1>
        <p>
          Capta la atención de tus fans de una forma completamente nueva con
          Canvas, un breve elemento visual en bucle que puedes añadir a tus
          canciones en Spotify. Son portadas de álbum para la era del streaming.
        </p>
        <p>
          <em>Canvas ya está disponible para todos los artistas</em>
        </p>
      </SectionOneDiv>
      <SectionOneFlex>
        <PhoneFrame video={heroVideo} />
        <Slider values={[3, 1, 2, 4, 5]} handleClick={handleClick} margin="10px" />
      </SectionOneFlex>
    </SectionTemplate>
  )
}

export default SectionOne
