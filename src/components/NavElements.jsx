import { styled } from "styled-components"

const NavElementsStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  background-color: ${(props) =>
    props.background ? props.background : "#000000"};
`

const NavElements = ({ children, background }) => {
  return (
    <NavElementsStyled background={background}>{children}</NavElementsStyled>
  )
}

export default NavElements
