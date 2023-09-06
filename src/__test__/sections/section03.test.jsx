/**
 * @vitest-environment jsdom
 */

import { describe, test, expect, it } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import SectionThree from "../../sections/sections/Section03"
import Tile from "../../components/Tile"
import userEvent from "@testing-library/user-event"


describe("SectionThree", () => {
  test("Section should have a desktop and mobile multitile", () => {
    render(<SectionThree />)
    expect(screen.getByTestId("multitile desktop")).toBeInTheDocument()
    expect(screen.getByTestId("multitile mobile")).toBeInTheDocument()
  })
})

describe("Tile", () => {
  test("Tile renders an image and text", () => {
    render(<Tile />)
    expect(screen.getByText("test")).toBeInTheDocument()
  })
})

describe("Slider", () => {
  it("Should change tile content on click", async () => {
    render(<SectionThree />)
    const radioButton = screen.getByLabelText("1")
    await userEvent.click(radioButton)
    await waitFor(async () => {
      const contentAfterClick = screen.getByText("Hazte notar.")
      expect(contentAfterClick).toBeInTheDocument()
    })
  })
})