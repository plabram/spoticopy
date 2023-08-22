import { styled } from 'styled-components'


const ButtonStyled = styled.button`
background-color: ${props => props.background ? props.background : "#000000"};
padding: 5px;
border-radius: 3px;
border: 0;
font-weight: bold;
font-size: ${props => props.size ? props.size : "#14px"};
color: ${props => props.color ? props.color : "#ffffff"};

&:hover {
  color: var(--accent);
  cursor: pointer;
}
`

const Button = ({ children, color, background, action, size, align }) => {
  return (
    <ButtonStyled align={align} size={size} onClick={action} background={background} color={color}>
      {children}
    </ButtonStyled>
  )
}

export default Button