import { styled } from "styled-components";

const PosterStyled = styled.div`
margin-top: ${props => props.padding ? props.padding : "0px"};
margin-left: 10px;
margin-right: 10px;
width: 250px;
animation: animation 4s ease-out;
  `

const PosterVideo = styled.video`
width: 200px;
height: 350px;
object-fit: cover;
  `

const PosterP = styled.p`
margin-top: 0.25rem;
padding: 0;
color: var(--mid);
`

const Poster = ({ video, padding }) => {

  return (
    <PosterStyled padding={padding}>
      <PosterVideo
        onMouseOver={event => event.target.play()}
        onMouseOut={event => event.target.pause()}
        src={video.video}
        data-testid="poster video" />
      <h4>{video.name}</h4>
      <PosterP>{video.artist}</PosterP>
    </PosterStyled >
  )
}

export default Poster