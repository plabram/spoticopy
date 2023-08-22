import Poster from './Poster'
import { styled } from 'styled-components'


const CarrouselP = styled.p`
text-align: center;
color: var(--mid);
font-style: italic;
`

const CarrouselDiv = styled.div`
display: flex;
flex-direction: row;
overflow: scroll;
height: 470px;

&::-webkit-scrollbar {
  display: none;
}
`

const Carrousel = ({ videos, explanation }) => {
  const padding = ["40px", "10px", "25px", "15px", "30px", "20px"]

  return (
    <>
      <CarrouselDiv data-testid="carrousel">
        {videos.map((video, index) => (
          <Poster key={index} video={video} padding={padding[index % 6]} />
        ))}
      </CarrouselDiv>
      <CarrouselP>{explanation ? explanation : ""}</CarrouselP>
    </>
  )
}

export default Carrousel
