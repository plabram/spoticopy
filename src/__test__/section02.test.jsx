/**
 * @vitest-environment jsdom
 */

import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { sampleVideos } from "../content/sampleVideos"
import Poster from "../components/Poster"
import SectionTwo from "../sections/sections/Section02"

describe("SectionTwo", () => {
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
