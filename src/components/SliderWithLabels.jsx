import { styled } from "styled-components";
import { device } from "../breakpoints";

const SliderStyled = styled.div`
text-align: center;
display: flex;
justify-content: center;
`

const SliderContainerDiv = styled.div`
display: flex;
flex-direction: row;
`

const SliderInputStyledLabel = styled.label`
display: block;

@media ${device.mobile} {
  width: 80px;
  font-size: 11px;
}
`

const SliderDots = styled.img`
width: 100px;
opacity: 40%;
padding-bottom: 50px;
background: rgba(0,0,0,0);

@media ${device.mobile} {
  display: none;
}
`



const SliderWithLabels = ({ values, handleClick }) => {
  return (
    <SliderStyled >
      {values.map((value, index) => (

        <SliderContainerDiv key={index}>
          <div>
            <input key={index} type="radio" id={value} name="button-slider" value={value} onClick={handleClick} defaultChecked={index === 0 ? true : false} />
            <SliderInputStyledLabel htmlFor={value}>{value}</SliderInputStyledLabel>
          </div>

          {index !== values.length - 1 && <SliderDots src="../../public/images/three-dots.svg" alt="dots" />}
        </SliderContainerDiv>
      ))
      }
    </SliderStyled >
  )
}

export default SliderWithLabels