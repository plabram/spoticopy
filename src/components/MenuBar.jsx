import { styled } from "styled-components"
import { device } from "../breakpoints"

const MenuBarStyled = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: space-between;
  align-items: center;
  padding: 32px 16px 32px 16px;
  font-size: 0.875rem;
  animation: animation 2s ease-out;
  background-color: ${(props) =>
    props.background ? props.background : "#000000"};

  @media ${device.mobile} {
    flex-direction: ${(props) =>
    props.direction ? props.direction : "row"};
  }
`

const MenuBar = ({ children, background, direction }) => {
  return (
    <MenuBarStyled background={background} direction={direction}>
      {children}
    </MenuBarStyled>
  )
}

export default MenuBar
