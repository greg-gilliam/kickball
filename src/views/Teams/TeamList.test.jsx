import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { MemoryRouter, Route } from 'react-router';
import userEvent from '@testing-library/user-event';
import TeamList from './TeamList';

const mockTeam1 = {
  id: 1,
  created_at: '2021-12-09T18:48:00+00:00',
  name: 'My Team',
  city: 'Anytown',
  state: 'US',
  players: [],
};

const mockTeam2 = {
  id: 2,
  created_at: '2021-12-09T18:48:00+00:00',
  name: 'My Other Team',
  city: 'Littleville',
  state: 'US',
  players: [],
};

const server = setupServer(
  rest.get('https://osmoedepntnqxfybllns.supabase.co/rest/v1/teams', (req, res, ctx) => {
    return res(ctx.json(mockTeam1, mockTeam2));
  }),
  rest.delete('https://osmoedepntnqxfybllns.supabase.co/rest/v1/teams', (req, res, ctx) => {
    return res(ctx.json(mockTeam2));
  })
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it('should list some teams', () => {
  const { container } = render(
    <MemoryRouter>
      <TeamList />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
