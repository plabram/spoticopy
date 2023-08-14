import { styled } from "styled-components";


const SocialIconStyled = styled.img`
width: ${props => props.width ? props.width : "54px"}
height: ${props => props.height ? props.height : props.width};
background-color: ${props => props.background ? props.background : "#ffffff"};
border-radius: ${props => props.border ? props.border : "50%"};
border: 3px solid #222326;
`

const SocialIcon = ({ img, width, height, border, background }) => {
  return (
    <SocialIconStyled src={img} width={width} height={height} border={border} background={background}></SocialIconStyled>
  )
}

export default SocialIcon