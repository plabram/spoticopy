import { styled } from "styled-components";

const SliderStyled = styled.div`
text-align: center;
display: flex;
justify-content: center;
`

const SliderContainerDiv = styled.div`
display: flex;
flex-direction: row;
margin: 10px;
`

const SliderInput = styled.input`
&[type="radio"] {
  padding: 5px;

&:checked {
  border: 3px solid var(--light);
}

&:hover {
  background-color: var(--dark)
}
}
`



const Slider = ({ values, handleClick }) => {
  return (
    <SliderStyled >
      {values.map((value, index) => (
        <SliderContainerDiv key={index}>
          <div>
            <SliderInput key={index} type="radio" id={value} name="button-slider" value={value} onClick={handleClick} defaultChecked={index === 0 ? true : false} />
          </div>
        </SliderContainerDiv>
      ))
      }
    </SliderStyled >
  )
}

export default Slider