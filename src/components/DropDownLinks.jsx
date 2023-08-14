import { styled } from "styled-components"
import Button from "./Button"

const DropDrownLinksStyled = styled.li`
background-color: #ffffff;
color: #000000;
font: 14px;
font-weight: bold;
`

const DropDownLinks = ({ children, action }) => {
  return (
    <DropDrownLinksStyled><Button action={action} color="#000000" background="#ffffff">{children}</Button></DropDrownLinksStyled>
  )
}

export default DropDownLinks