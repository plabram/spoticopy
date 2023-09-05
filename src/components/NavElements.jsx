import { styled } from "styled-components"

const NavElementsStyled = styled.div`
  display: flex;
  gap: 20px;
  align-content: center;
  background-color: ${(props) =>
    props.background ? props.background : "#000000"};
`

const NavElements = ({ children, background }) => {
  return (
    <NavElementsStyled background={background}>{children}</NavElementsStyled>
  )
}

export default NavElements
