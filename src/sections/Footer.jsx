import NavBar from '../sections/sectionTemplates/NavTemplate'
import NavElements from '../components/NavElements'
import SocialIcon from '../components/SocialIcon'

const Footer = () => {
  return (
    <div>
      <NavBar>
        <NavElements>
          <SocialIcon img="../public/icons/spotify.png" width={"140px"} height={"48px"} border={"0%"} background={"none"} />
        </NavElements>
        <NavElements>
          <SocialIcon img="../public/icons/app-store.svg" width={"170px"} border={"0%"} background={"none"} alt="App Store" />
          <SocialIcon img="../public/icons/google-play.png" width={"170px"} border={"0%"} background={"none"} alt="Google Play" />
        </NavElements>

        <NavElements>
          <SocialIcon img="../public/icons/linkedin.png" width={"54px"} alt="LinkedIn" />
          <SocialIcon img="../public/icons/twitter.png" width={"54px"} alt="Twitter" />
          <SocialIcon img="../public/icons/instagram.png" width={"54px"} alt="Instagram" />
        </NavElements>
      </NavBar>
      <NavBar>
        <NavElements>
          <p>Información Legal</p>
          <p>Política de Privacidad</p>
          <p>Cookie Settings</p>
        </NavElements>
        <p>(C) 2020 Spotify AB</p>
      </NavBar>
    </div>
  )
}

export default Footer