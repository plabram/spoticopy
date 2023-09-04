import MenuBar from "../components/MenuBar"
import NavElements from "../components/NavElements"
import SocialIcon from "../components/SocialIcon"

const Footer = () => {
  return (
    <div>
      <MenuBar>
        <NavElements>
          <SocialIcon
            img="/logos/spotify.png"
            width={"140px"}
            height={"48px"}
            border={"0%"}
            background={"none"}
          />
        </NavElements>
        <NavElements>
          <SocialIcon
            img="/icons/app-store.svg"
            width={"170px"}
            border={"0%"}
            background={"none"}
            alt="App Store"
          />
          <SocialIcon
            img="/icons/google-play.png"
            width={"170px"}
            border={"0%"}
            background={"none"}
            alt="Google Play"
          />
        </NavElements>

        <NavElements>
          <SocialIcon img="/icons/linkedin.png" width={"54px"} />
          <SocialIcon img="/icons/twitter.png" width={"54px"} />
          <SocialIcon img="/icons/instagram.png" width={"54px"} />
        </NavElements>
      </MenuBar>
      <MenuBar>
        <NavElements>
          <p>Información Legal</p>
          <p>Política de Privacidad</p>
          <p>Cookie Settings</p>
        </NavElements>
        <p>(C) 2020 Spotify AB</p>
      </MenuBar>
    </div>
  )
}

export default Footer
