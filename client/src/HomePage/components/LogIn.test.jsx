import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import LogIn from './LogIn';
import {expect} from "vitest";
import { MemoryRouter } from 'react-router-dom'


describe('LogIn', () => {
  test('renders login form', () => {
    render(
      <MemoryRouter>
        <LogIn />
      </MemoryRouter>  
    )
    
    expect(screen.getByText('LOG IN')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Email...')).toBeInTheDocument()
    
  })

  test('renders login form', () => {
    render(
      <MemoryRouter>
        <LogIn />
      </MemoryRouter>  
    )
    
    expect(screen.getByText('LOG IN')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Password...')).toBeInTheDocument()
    
  })

  test('email field is empty by default', () => {
    render(
      <MemoryRouter>
        <LogIn />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText('Enter Email...')).toHaveValue('');
  });

  test('password field is empty by default', () => {
    render(
      <MemoryRouter>
        <LogIn />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText('Enter Password...')).toHaveValue('');
  });

  test('typing in email field updates its value', () => {
    render(
      <MemoryRouter>
        <LogIn />
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText('Enter Email...');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    expect(emailInput).toHaveValue('test@example.com');
  });

  test('typing in password field updates its value', () => {
    render(
      <MemoryRouter>
        <LogIn />
      </MemoryRouter>
    );

    const passwordInput = screen.getByPlaceholderText('Enter Password...');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(passwordInput).toHaveValue('password123');
  });
})