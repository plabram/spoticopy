/**
 * @vitest-environment jsdom
 */

import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Steps from "../sections/sections/Steps"
import Tile from "../components/Tile"

describe("Steps", () => {
  test("Section should have a desktop and mobile multitile", () => {
    render(<Steps />)
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

