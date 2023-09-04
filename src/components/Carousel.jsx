import Poster from "./Poster"
import { styled } from "styled-components"

const CarouselP = styled.p`
  text-align: center;
  color: var(--mid);
  font-style: italic;
`

const CarouselDiv = styled.div`
  display: flex;
  overflow: scroll;
  height: 470px;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Carousel = ({ videos, explanation }) => {
  const padding = ["40px", "10px", "25px", "15px", "30px", "20px"]

  return (
    <>
      <CarouselDiv data-testid="carousel">
        {videos.map((video, index) => (
          <Poster key={index} video={video} padding={padding[index % 6]} />
        ))}
      </CarouselDiv>
      <CarouselP>{explanation ? explanation : ""}</CarouselP>
    </>
  )
}

export default Carousel
