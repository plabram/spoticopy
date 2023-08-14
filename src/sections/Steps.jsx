import SectionTemplate from './sectionTemplates/SectionTemplate'
import MultiTile from '../components/MultiTileResponsiveSlider'

const Steps = () => {
  return (
    <SectionTemplate padding={"14vw"}>
      <MultiTile imgs={["../../public/assets/get-noticed.svg", "../../public/assets/share-it.avif", "../../public/assets/change-it-up.svg"]}
        titles={["Hazte notar.", "Compártelo.", "Haz cambios."]}
        descriptions={["Atrae público y consigue que te escuchen. Cuando los oyentes ven un Canvas, es más probable que sigan escuchando la canción (+ 5 % de media en comparación con el grupo de control), la compartan (+ 145 %), la añadan a sus playlists (+ 20 %), la guarden (+ 1,4 %) y visiten tu página de perfil (+ 9 %).",
          "Tus Canvas también llegan a los fans que no utilizan Spotify. Si tú o tus oyentes compartís la canción en las historias de Instagram desde la aplicación de Spotify, tu Canvas aparecerá de fondo en la historia, junto con los detalles de la canción y un enlace Reproducir en Spotify para los fans.",
          "Añadir un Canvas es muy fácil. Puedes hacerlo una sola vez, al lanzar la canción, o bien cada vez que te venga la inspiración y se te ocurra algo nuevo. De este modo, llegarás a nuevos oyentes y quedarán enganchados."]}
      />

      {/* <Tile img={"../../public/images/get-noticed.svg"}
        title={"Hazte notar."}
        description={"Atrae público y consigue que te escuchen. Cuando los oyentes ven un Canvas, es más probable que sigan escuchando la canción (+ 5 % de media en comparación con el grupo de control), la compartan (+ 145 %), la añadan a sus playlists (+ 20 %), la guarden (+ 1,4 %) y visiten tu página de perfil (+ 9 %)."}
      />
      <Tile img={"../../public/images/share-it.avif"}
        title={"Compártelo."}
        description={"Tus Canvas también llegan a los fans que no utilizan Spotify. Si tú o tus oyentes compartís la canción en las historias de Instagram desde la aplicación de Spotify, tu Canvas aparecerá de fondo en la historia, junto con los detalles de la canción y un enlace Reproducir en Spotify para los fans."}
      />
      <Tile img={"../../public/images/change-it-up.svg"}
        title={"Haz cambios."}
        description={"Añadir un Canvas es muy fácil. Puedes hacerlo una sola vez, al lanzar la canción, o bien cada vez que te venga la inspiración y se te ocurra algo nuevo. De este modo, llegarás a nuevos oyentes y quedarán enganchados."}
      /> */}
    </SectionTemplate >
  )
}

export default Steps