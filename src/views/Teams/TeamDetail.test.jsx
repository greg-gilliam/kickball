import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TeamDetail from "./TeamDetail";

xit("should render a detailed view of an individual team", async () => {
  render(
    <MemoryRouter>
      <TeamDetail label="My Label" match={{ params: { teamId: "teamId" } }} />
    </MemoryRouter>
  );
  screen.getByText("Loading team...");

  const teamName = await screen.findByText("Lakeville Thunderfeet", {
    exact: false,
  });
  const customLabel = screen.getByText("The value of the label prop...");

  expect(teamName).toBeInTheDocument();
  expect(customLabel).toBeInTheDocument();
});
