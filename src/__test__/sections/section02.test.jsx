/**
 * @vitest-environment jsdom
 */

import { describe, test, expect, it } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import { sampleVideos } from "../../content/sampleVideos"
import Poster from "../../components/Poster"
import SectionTwo from "../../sections/sections/Section02"
import userEvent from "@testing-library/user-event"

describe("Section Two", () => {
  test("Section should have a carousel", () => {
    render(<SectionTwo videos={sampleVideos} />)
    expect(screen.getByTestId("carousel")).toBeInTheDocument()
  })
})

describe("Posters", () => {
  test("Carousel should show at least one poster video", () => {
    render(<Poster video={sampleVideos[0]} padding="5px" />)
    expect(screen.getByTestId("poster video")).toBeInTheDocument()
  })
})

describe("Carousel", () => {
  it("Should change video array on click", async () => {
    render(<SectionTwo />)
    const videoCategory = screen.getByLabelText("Vídeo")
    console.log(videoCategory)
    await userEvent.click(videoCategory)
    await waitFor(async () => {
      const firstVideoAfterClick = screen.getAllByTestId("poster video")[0]
      expect(firstVideoAfterClick).toHaveAttribute(
        "src",
        "https://canvaz.scdn.co/upload/licensor/7JGwF0zhX9oItt9901OvB5/video/fdde72ad6463499e8cb83ddc9bb9f60f.cnvs.mp4"
      )
    })
  })
})