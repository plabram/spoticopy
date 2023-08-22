import { styled } from 'styled-components'


const TileStyled = styled.div`
text-align: center;
padding: 150px 18px 18px 18px;
`

const TileImageStyled = styled.img`
height: 23vw;
max-height: 170px;
max-width: 220px;
margin-bottom: 2vw;
`

const Tile = ({ img, title, description }) => {
  return (
    <>
      <TileStyled data-testid="tile">
        <TileImageStyled src={img} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>test</p>
      </TileStyled>
    </>
  )
}

export default Tile