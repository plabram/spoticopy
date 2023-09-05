/**
 * @vitest-environment jsdom
 */

import { describe, test, expect } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import { sampleVideos } from "../../content/sampleVideos"
import Poster from "../../components/Poster"
import SectionTwo from "../../sections/sections/Section02"
import { act } from "react-dom/test-utils"

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
  test("Should change video array on click", async () => {
    render(<SectionTwo />)
    const input = screen.getByRole("radio", { name: "Vídeo" })
    const video = screen.getAllByTestId("poster video")
    act(() => {
      input.click()
    })
    waitFor(() =>
      expect(video[0]).toHaveAttribute("src", "https://prismic-io.s3.amazonaws.com/sp-canvas%2F1da97ce4-6012-4b2e-87d2-d88cd55e7b1c_featured_billie360x640.mp4")
    )
  })
})

