/**
 * @vitest-environment jsdom
 */

import { describe, test, expect, it } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import SectionOne from "../../sections/sections/Section01"
import PhoneFrame from "../../components/PhoneFrame"
import { sampleVideos } from "../../content/sampleVideos"
import { act } from "react-dom/test-utils"
import userEvent from "@testing-library/user-event"

describe("Section One basics", () => {
  test("Should render basic header and body text", () => {
    render(<SectionOne />)
    expect(screen.getByText("Sorprende")).toBeInTheDocument()
    expect(
      screen.getByText("Canvas ya está disponible para todos los artistas")
    ).toBeInTheDocument()
  })
})

describe("Phone Frame basics", () => {
  test("Should render default video in frame with controls", () => {
    render(<PhoneFrame video={sampleVideos[2]} />)
    expect(screen.getByTestId("hero video")).toBeInTheDocument()
    expect(screen.getByTestId("mobile phone frame")).toBeInTheDocument()
    expect(screen.getByTestId("mobile phone controls")).toBeInTheDocument()
  })
})

describe("Phone Frame slider", () => {
  it("Should change video on click", async () => {
    render(<SectionOne />)
    const billieEilishVideo = screen.getByLabelText("2")
    await userEvent.click(billieEilishVideo)
    await waitFor(async () => {
      const videoAfterClick = screen.getByTestId("hero video")
      expect(videoAfterClick).toHaveAttribute(
        "src",
        "https://canvaz.scdn.co/upload/licensor/5bSw7fRotCnRCcO9br14W5/video/2a67d467ce5a49cfb7a151d9a059ca5c.cnvs.mp4"
      )
    })
  })
})



