import { afterEach, describe, it } from "vitest"
import { render, cleanup, screen } from "@testing-library/react"
import { PollCreator } from "../PollCreator"
import { MemoryRouter } from 'react-router'

describe("PollCreator", () => {
  afterEach(cleanup)

  it('Should display the title', () => {
    render(
      <MemoryRouter>
        <PollCreator />
      </MemoryRouter>
    )
    screen.getByText("Create a Poll")
  })
})