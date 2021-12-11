import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TeamDetail from './TeamDetail';

it('should render a detailed view of an individual team', async () => {
  render(
    <MemoryRouter>
      <TeamDetail label="My Label" match={{ params: { id: '2' } }} />
    </MemoryRouter>
  );
  screen.getByText('Loading team...');

  const teamName = await screen.findByText(/Manitoba Manhandlers/i);
  const customLabel = screen.getByText(/My label/i);

  expect(teamName).toBeInTheDocument();
  expect(customLabel).toBeInTheDocument();
});
