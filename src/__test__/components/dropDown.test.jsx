/**
 * @vitest-environment jsdom
 */

import { describe, test, expect } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import DropDown from "../../components/DropDown"
import { languages } from "../../content/languages";
import userEvent from "@testing-library/user-event";

describe("DropDown", () => {
  test("Should show different languages on click", async () => {
    render(<DropDown links={languages} />)
    console.log(screen.getAllByRole("button"))
    userEvent.click(screen.getByRole("button"))
    await waitFor(() => expect(screen.queryByText("Svenska")).toBeInTheDocument())
  })
})