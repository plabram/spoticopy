import DropDown from './DropDown'
import NavBar from '../sections/sectionTemplates/NavTemplate'
import { languages } from '../../languages'
import NavElements from './NavElements'
import Button from './Button'
import { device } from '../breakpoints'
import { styled } from 'styled-components'
import { useState } from 'react'


const LogoStyled = styled.img`
width: 288px;
height: 38px;
background-color: none;
`

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
line-height: 1.15;
`

const Menu = styled.div`
padding-left: 40px;
padding-top: 30px;
padding-right: 40px;
width: 100%;
height: 50%;
display: ${({ open }) => open ? "block" : "none"};
background-color: #141414;
color: var(--light);
z-index: 999;
position: absolute;
transition:all 0.5s ease-in-out;
font-size: 24px;
`

// const MobileNavLinksStyled = styled.li`
// font-size: 12px;
// `


const HamburgerNav = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <MobileHeader>
        <Menu open={open}>
          <CloseButtonContainer>
            <Button background="#141414" size="24px" action={() => setOpen(false)}>
              X
            </Button>
          </CloseButtonContainer>
          <DropDown links={languages} />
          <ul>
            <li>Qué es Canvas</li>
            <li>Cómo se usa</li>
            <li>Noticias</li>
            <li>Ejemplos</li>
            <li>Recursos</li>
          </ul>
          <br /><br />
          <hr></hr>
          <br />
          <ul>
            <li>Empezar</li>
            <li>Información legal</li>
            <li>Política de privacidad</li>
          </ul>
          <br /><br />
          <h5>(c) 2020 Spotify AB</h5>
        </Menu>
        <NavBar background="#141414" direction="row">
          <LogoStyled src="../../public/images/spotify-canvas-logo.png" alt="Spotify logo" />
          <Button action={() => setOpen(true)} background="var(--middark)"><img src="../../public/images/hamburger.svg" /></Button>
        </NavBar>
      </MobileHeader>
      <DesktopHeader>
        <NavBar>
          <LogoStyled src="../../public/images/spotify-canvas-logo.png" alt="Spotify logo" />
          <NavElements background="#141414">
            <DropDown links={languages} />
            <Button background="#141414">Empezar</Button>
          </NavElements>
        </NavBar>
      </DesktopHeader >
    </>
  )
}

export default HamburgerNav