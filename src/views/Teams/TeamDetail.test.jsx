import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TeamDetail from "./TeamDetail";

it("should render a detailed view of an individual team", () => {
  render(
    <MemoryRouter>
      <TeamDetail label="My Label" match={{ params: { teamId: "teamId" } }} />
    </MemoryRouter>
  );
  screen.getByText(/Team details/i);
});
