import { styled } from "styled-components";
import Tile from "./Tile";
import Slider from "./Slider";
import { device } from "../breakpoints";
import { useState } from "react";


const MultiTileMobile = styled.div`

@media ${device.desktop} {
  display: none;
  font-color: red;
}
`

const MultiTileDesktop = styled.div`

display: flex;
flex-direction: row;
justify-items: center;

@media ${device.mobile} {
  display: none;
}
`

const MultiTile = ({ imgs, titles, descriptions }) => {
  const handleClick = (e) => {
    setHeroContent(e.target.value)

  }
  const [heroContent, setHeroContent] = useState(0)

  const tilesCount = imgs.length
  const tileData = imgs.map((img, index) => ({
    img,
    title: titles[index],
    description: descriptions[index]
  }));
  const valuesArray = [...Array(tilesCount).keys()]

  return (
    <>
      <MultiTileDesktop data-testid="multitile desktop">
        {tileData.map((data, index) => (
          <Tile
            key={index}
            img={data.img}
            title={data.title}
            description={data.description}
          />
        ))}
      </MultiTileDesktop>

      <MultiTileMobile data-testid="multitile mobile">
        <Tile
          img={imgs[heroContent]}
          title={titles[heroContent]}
          description={descriptions[heroContent]}
        />
        <Slider values={valuesArray} handleClick={handleClick}></Slider>
      </MultiTileMobile>
    </>
  )
}

export default MultiTile