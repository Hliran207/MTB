import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import NavBarChildPage from './NavBarChildPage';
import {expect} from "vitest";
import { MemoryRouter } from 'react-router-dom'


describe('NavBarChildPage', () => {
  test('renders signup form name parent', () => {
    render(
      <MemoryRouter>
        <NavBarChildPage />
      </MemoryRouter>  
    )
    
    expect(screen.getByText('התנתקות')).toBeInTheDocument()
  })

  let originalLocation;

  beforeEach(() => {
    originalLocation = window.location;
    delete window.location;
    window.location = { href: '' };
  });

  afterEach(() => {
    window.location = originalLocation;
  });

  test('logout button redirects to home page', () => {
    const { getByText } = render(<NavBarChildPage />);
    const logoutButton = getByText('התנתקות'); 

    fireEvent.click(logoutButton);

    // Check if window.location.href has been set to '/'
    expect(window.location.href).toBe('/'); // Ensure the URL path is correctly set after clicking the logout button.
  });
})
