import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import SignUp from './SignUp';
import {expect} from "vitest";
import { MemoryRouter } from 'react-router-dom'


describe('SignUp', () => {
  test('renders signup form name parent', () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>  
    )
    
    expect(screen.getByText('SIGN UP PARENT')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Name...')).toBeInTheDocument()
    
  })

  //AI tests 
  test('renders signup form Email Parent', () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>  
    )
    
    expect(screen.getByText('SIGN UP PARENT')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Email...')).toBeInTheDocument()
    
  })

  test('renders signup form Child Email', () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>  
    )
    
    expect(screen.getByText('SIGN UP PARENT')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Child Email...')).toBeInTheDocument()
    // ... test for other form fields
  })
  
  test('renders signup form Password', () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>  
    )
    
    expect(screen.getByText('SIGN UP PARENT')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Password...')).toBeInTheDocument()
    // ... test for other form fields
  })
  
})
