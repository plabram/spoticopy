/**
 * @vitest-environment jsdom
 */

import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Header from "../sections/Header"


describe("Header", () => {
  test("Should offer desktop and mobile header", () => {
    render(<Header />)
    expect(screen.getByTestId("mobile header")).toBeInTheDocument()
    expect(screen.getByTestId("desktop header")).toBeInTheDocument()
  })
})

