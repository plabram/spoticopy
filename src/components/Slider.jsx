import { styled } from "styled-components"
import { device } from "../breakpoints"

const SliderStyled = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`

const SliderContainerDiv = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  display: flex;
`

const SliderInput = styled.input`
  &[type="radio"] {
    &:checked {
      border: ${(props) => (props.labels ? "3px solid var(--accent)" : "3px solid var(--light)")};
    }
  }
`
const SliderInputStyledLabel = styled.label`
  display: ${(props) => (props.labels ? "block" : "none")};
`

const SliderDots = styled.img`
  display: ${(props) => (props.labels ? "inline" : "none")};
width: 100px;
opacity: 40%;
padding-bottom: 50px;
background: rgba(0, 0, 0, 0);

@media ${device.mobile} {
  display: none;
}
`

const Slider = ({ values, handleClick, labels, margin }) => {
  return (
    <SliderStyled>
      {values.map((value, index) => (
        <SliderContainerDiv key={index} margin={margin}>
          <div>
            <SliderInput
              key={index}
              type="radio"
              // id={value}
              id={index}
              name="button-slider"
              value={value}
              onClick={handleClick}
              defaultChecked={index === 0 ? true : false}
              labels={labels}
            />
            <SliderInputStyledLabel htmlFor={index} labels={labels}>
              {value}
            </SliderInputStyledLabel>
          </div>
          {index !== values.length - 1 && (
            <SliderDots src="/images/three-dots.svg" alt="dots" labels={labels} />
          )}

        </SliderContainerDiv>
      ))}
    </SliderStyled>
  )
}

export default Slider
