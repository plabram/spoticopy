/**
 * @vitest-environment jsdom
 */

import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import SectionThree from "../sections/sections/Section03"
import Tile from "../components/Tile"

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
