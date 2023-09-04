import DropDown from "../components/DropDown"
import MenuBar from "../components/MenuBar"
import { languages } from "../content/languages"
import NavElements from "../components/NavElements"
import Button from "../components/Button"
import { device } from "../breakpoints"
import { styled } from "styled-components"
import { useState } from "react"
import { LogoStyled } from "../components/Logo"
import Modal from "../components/Modal"
import { mobileHeaderLinks, footerLinks } from "../content/footerAndHeaderLinks"

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

const HeaderList = styled.ul`
margin-top: 40px;
margin-bottom: 40px;
`

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <MobileHeader data-testid="mobile header">
        <Modal open={open} setOpen={setOpen}>
          <DropDown links={languages} />
          <HeaderList>
            {mobileHeaderLinks.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </HeaderList>
          <hr></hr>
          <HeaderList>
            {footerLinks.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </HeaderList>
          <h5>(c) 2020 Spotify AB</h5>
        </Modal>
        <MenuBar background="#141414" >
          <LogoStyled src="/logos/spotify-canvas-logo.png" alt="Spotify logo" />
          <Button action={() => setOpen(true)} background="var(--middark)">
            <img src="/images/hamburger.svg" alt="hamburger menu" />
          </Button>
        </MenuBar>
      </MobileHeader>
      <DesktopHeader data-testid="desktop header">
        <MenuBar>
          <LogoStyled src="/logos/spotify-canvas-logo.png" alt="Spotify logo" />
          <NavElements background="#141414">
            <DropDown links={languages} />
            <Button background="#141414">Empezar</Button>
          </NavElements>
        </MenuBar>
      </DesktopHeader>
    </>
  )
}

export default Header