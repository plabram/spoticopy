import React, { useState } from "react"
import { styled } from "styled-components"
import Button from "./Button"
import DropDownLinks from "./DropDownLinks"

const DropDownMenu = styled.ul`
  border-radius: 5px;
  list-style-type: none;
  color: #000000;
  position: absolute;
  z-index: 10;
  right: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  min-width: 300px;
  margin: 10px;
  background-color: #ffffff;
`

const DropDown = ({ links }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }

  const [selection, setSelection] = useState(links[0].shortName)

  const handleLinkClick = (link) => {
    setSelection(link.shortName)
    setOpen(false)
  }

  return (
    <div>
      <Button background="inherit" action={handleOpen} data-testid="dropdown button">
        {selection}
        {open ? "  ˄" : "  ˅"}
      </Button>
      {open ? (
        <DropDownMenu>
          {links.map((link, index) => (
            <DropDownLinks key={index} action={() => handleLinkClick(link)}>
              {link.name}
            </DropDownLinks>
          ))}
        </DropDownMenu>
      ) : null}
    </div>
  )
}

export default DropDown
