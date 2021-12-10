import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { Router, Route } from "react-router";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import AddTeam from "./AddTeam";
import TeamDetail from "./TeamDetail";

const mockTeam = {
  id: 2,
  created_at: "2021-12-09T18:48:00+00:00",
  name: "Manitoba Manhandlers",
  city: "Manitoba",
  state: "Canada",
  players: [],
};

const server = setupServer(
  rest.get(
    "https://osmoedepntnqxfybllns.supabase.co/rest/v1/teams",
    (req, res, ctx) => {
      return res(ctx.json(mockTeam));
    }
  ),
  rest.post(
    "https://osmoedepntnqxfybllns.supabase.co/rest/v1/teams",
    (req, res, ctx) => {
      return res(ctx.json([mockTeam]));
    }
  )
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it("should add a team and redirect to the team detail page", async () => {
  const history = createMemoryHistory();
  history.push("/teams/new");

  render(
    <Router history={history}>
      <Route path="/teams/new">
        <AddTeam />
      </Route>
      <Route path="/teams/:id" component={TeamDetail} />
    </Router>
  );

  screen.getByText("Add a team");

  const nameField = screen.getByLabelText(/name/i);
  const cityField = screen.getByLabelText(/city/i);
  const stateField = screen.getByLabelText(/state/i);
  const submitBtn = screen.getByRole("button", { name: /Add a team/i });

  userEvent.type(nameField, "Manitoba Manhandlers");
  userEvent.type(cityField, "Manitoba");
  userEvent.type(stateField, "Canada");
  userEvent.click(submitBtn);

  await screen.findByText(/Canada/i);
});
