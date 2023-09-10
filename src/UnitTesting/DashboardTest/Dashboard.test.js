import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../Layouts/Dashboard';

describe('Dashboard', () => {
  it('renders loading text when adminMenu is false', () => {
    render(<Dashboard adminMenu={false} />);
    const loadingText = screen.getByText('Loading'); // Replace 'Loading' with the actual loading text
    expect(loadingText).toBeInTheDocument();
  });

  it('renders something else when adminMenu is true', () => {
    render(<Dashboard adminMenu={true} />);
    // Add your assertion here for the content displayed when adminMenu is true.
  });
});
