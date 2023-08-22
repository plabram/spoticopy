/**
 * @vitest-environment jsdom
 */

import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Footer from "../sections/Footer"
import SocialIcon from "../components/SocialIcon"


describe("Footer", () => {
  test("Should render bottom links", () => {
    render(<Footer />)
    expect(screen.getByText("Información Legal")).toBeInTheDocument()
  })

  test("Footer should show social icons", () => {
    render(<SocialIcon />)
    expect(screen.getByTestId("social icon")).toBeInTheDocument()
  })
})