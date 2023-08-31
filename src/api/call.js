export const getVideos = async (videoSetter) => {
  const SPOTI_URL = import.meta.env.VITE_APP_SPOTICOPY_URL
  //  "https://64d93689e947d30a260a0107.mockapi.io/api/Videos"

  try {
    const data = await fetch(SPOTI_URL)
    const dataToJson = await data.json()
    console.log("If you're API and you know it, clap your hands")
    videoSetter(dataToJson)
  } catch (error) {
    console.log("error:", error)
  }
}
