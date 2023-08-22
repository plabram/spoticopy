import HamburgerNav from '../components/HamburgerNav'

const Header = () => {
  return (
    <>
      <HamburgerNav mobileLinks={["Qué es Canvas", "Cómo se usa", "Noticias", "Ejemplos", "Recursos"]} />
    </>
  )
}

export default Header