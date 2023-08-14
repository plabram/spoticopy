import { styled } from 'styled-components'
import { device } from '../../breakpoints'

const SectionTemplateStyled = styled.div`
background-color: ${props => props.background ? props.background : "#000000"};
display: grid;
grid-template-columns: repeat(${props => props.col ? props.col : 1}, 1fr);
line-height: 1.35rem;
padding: 4rem;
gap: 10px;

align-items: initial;

@media ${device.mobile} {
  grid-template-columns: 1fr;
  padding: 2rem;
}
`

const SectionTemplate = ({ children, col, padding, background }) => {
  return (
    <SectionTemplateStyled col={col} padding={padding} background={background}>{children}</SectionTemplateStyled>
  )
}

export default SectionTemplate