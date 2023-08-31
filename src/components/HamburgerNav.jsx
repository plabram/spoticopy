import DropDown from "./DropDown"
import NavBar from "../sections/sectionTemplates/NavTemplate"
import { languages } from "../content/languages"
import NavElements from "./NavElements"
import Button from "./Button"
import { device } from "../breakpoints"
import { styled } from "styled-components"
import { useState } from "react"
import { LogoStyled } from "./Logo"

const DesktopHeader = styled.div`
  @media ${device.mobile} {
    display: none;
  }
`

const MobileHeader = styled.div`
  @media ${device.desktop} {
    display: none;
  }
`

const CloseButtonContainer = styled.div`
  text-align: right;
`

const Menu = styled.div`
  padding-left: 40px;
  padding-top: 30px;
  padding-right: 40px;
  width: 100%;
  height: 100vh;
  display: ${({ open }) => (open ? "block" : "none")};
  background-color: #141414;
  color: var(--light);
  z-index: 999;
  position: absolute;
  font-size: 24px;
  transform: translateX(100%);
  -webkit-transform: translateX(100%);
  animation: slide-in 0.5s forwards;
  -webkit-animation: slide-in 0.5s forwards;
`

const HamburgerNav = ({ mobileLinks }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <MobileHeader data-testid="mobile header">
        <Menu id="menu" open={open}>
          <CloseButtonContainer>
            <Button
              background="#141414"
              size="24px"
              action={() => setOpen(false)}
            >
              X
            </Button>
          </CloseButtonContainer>
          <DropDown links={languages} />
          <ul>
            {mobileLinks.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
          <br />
          <br />
          <hr></hr>
          <br />
          <ul>
            <li>Empezar</li>
            <li>Información legal</li>
            <li>Política de privacidad</li>
          </ul>
          <br />
          <br />
          <h5>(c) 2020 Spotify AB</h5>
        </Menu>
        <NavBar background="#141414" direction="row">
          <LogoStyled src="/logos/spotify-canvas-logo.png" alt="Spotify logo" />
          <Button action={() => setOpen(true)} background="var(--middark)">
            <img src="/images/hamburger.svg" />
          </Button>
        </NavBar>
      </MobileHeader>
      <DesktopHeader data-testid="desktop header">
        <NavBar>
          <LogoStyled src="/logos/spotify-canvas-logo.png" alt="Spotify logo" />
          <NavElements background="#141414">
            <DropDown links={languages} />
            <Button background="#141414">Empezar</Button>
          </NavElements>
        </NavBar>
      </DesktopHeader>
    </>
  )
}

export default HamburgerNav
