import { styled } from "styled-components"
import { device } from "../breakpoints"

const PhoneFrameDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 400px;
  animation: animation 4s ease-out;

  @media ${device.mobile} {
    width: 300px;
  }
`

const PhoneImage = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 825px;
  z-index: 1;

  @media ${device.mobile} {
    height: 600px;
  }
`

const FrontImage = styled.video`
  position: absolute;
  top: 80px;
  left: 30px;
  width: calc(100% - 60px);
  z-index: 2;
`

const Controls = styled.img`
  position: absolute;
  top: 45px;
  left: 30px;
  width: calc(100% - 60px);
  z-index: 3;
  opacity: 80%;
`

const PhoneFrame = ({ video }) => {
  return (
    <PhoneFrameDiv>
      <PhoneImage
        src="/images/smartphone.png"
        alt="mobile phone frame"
        data-testid="mobile phone frame"
      />
      <FrontImage
        src={video.video}
        alt="hero video"
        data-testid="hero video"
        autoPlay
        loop
        muted
      />
      <Controls
        src="/images/controls.png"
        alt="mobile phone controls"
        data-testid="mobile phone controls"
      />
    </PhoneFrameDiv>
  )
}

export default PhoneFrame
