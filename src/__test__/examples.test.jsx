/**
 * @vitest-environment jsdom
 */

import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { sampleVideos } from "../content/sampleVideos"
import Poster from "../components/Poster"
import Examples from "../sections/sections/Examples"

describe("Examples", () => {
  test("Section should have a carrousel", () => {
    render(<Examples videos={sampleVideos} />)
    expect(screen.getByTestId("carrousel")).toBeInTheDocument()
  })
})

describe("Posters", () => {
  test("Carrousel should show at least one poster video", () => {
    render(<Poster video={sampleVideos[0]} padding="5px" />)
    expect(screen.getByTestId("poster video")).toBeInTheDocument()
  })
})



