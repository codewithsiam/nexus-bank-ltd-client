import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../Layouts/Dashboard';

describe('Dashboard', () => {
    it('when adminMenu is true then loading text should be displayed', () => {
      render(<Dashboard adminMenu={false}/>);
    });
});
