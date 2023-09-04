import { styled } from "styled-components"
import Button from "../components/Button"

const CloseButtonStyled = styled.div`
  text-align: right;
`

const ModalStyled = styled.div`
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

const Modal = ({ open, setOpen, children }) => {

  return (
    <ModalStyled id="menu" open={open}>
      <CloseButtonStyled>
        <Button
          background="#141414"
          size="24px"
          action={() => setOpen(false)}
        >
          X
        </Button>
      </CloseButtonStyled>
      {children}
    </ModalStyled>
  )
}

export default Modal