/**
 * @vitest-environment jsdom
 */

import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import SectionOne from "../sections/sections/SectionOne"
import PhoneFrame from "../components/PhoneFrame"
import { sampleVideos } from "../content/sampleVideos"

describe("SectionOne", () => {
  test("Should render basic header and body text", () => {
    render(<SectionOne />)
    expect(screen.getByText("Sorprende")).toBeInTheDocument()
    expect(
      screen.getByText("Canvas ya está disponible para todos los artistas")
    ).toBeInTheDocument()
  })
})

describe("PhoneFrame", () => {
  test("Should render default video in frame with controls", () => {
    render(<PhoneFrame video={sampleVideos[2]} />)
    expect(screen.getByTestId("hero video")).toBeInTheDocument()
    expect(screen.getByTestId("mobile phone frame")).toBeInTheDocument()
    expect(screen.getByTestId("mobile phone controls")).toBeInTheDocument()
  })
})
