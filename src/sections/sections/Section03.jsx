import SectionTemplate from '../sectionTemplates/SectionTemplate'
import MultiTile from '../../components/MultiTileResponsiveSlider'
import { stepsContent } from '../../content/stepsContent'

const SectionThree = () => {
  return (
    <SectionTemplate padding={"14vw"}>
      <MultiTile
        imgs={[stepsContent[0].img, stepsContent[1].img, stepsContent[2].img]}
        titles={[stepsContent[0].title, stepsContent[1].title, stepsContent[2].title]}
        descriptions={[stepsContent[0].description, stepsContent[1].description, stepsContent[2].description]}
      />
    </SectionTemplate >
  )
}

export default SectionThree