/**
 * @vitest-environment jsdom
 */

import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Header from "../../sections/Header"

describe("Header", () => {
  test("Should offer desktop and mobile header", () => {
    render(<Header />)
    expect(screen.getByTestId("mobile header")).toBeInTheDocument()
    expect(screen.getByTestId("desktop header")).toBeInTheDocument()
  })

  test("Should show Spoticopy logo", () => {
    render(<Header />)
    expect(screen.getByAltText("Spoticopy logo mobile")).toBeInTheDocument()
    expect(screen.getByAltText("Spoticopy logo desktop")).toBeInTheDocument()
  })

  test("Should show Spoticopy logo", () => {
    render(<Header />)
    expect(screen.getByAltText("Spoticopy logo mobile")).toBeInTheDocument()
    expect(screen.getByAltText("Spoticopy logo desktop")).toBeInTheDocument()
  })

  test("Should show links", () => {
    render(<Header />)
    expect(screen.getByText("Qué es Canvas")).toBeInTheDocument()
    expect(screen.getByText("Cookie Settings")).toBeInTheDocument()
  })
})
