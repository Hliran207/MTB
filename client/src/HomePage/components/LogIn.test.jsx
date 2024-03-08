import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import LogIn from "./LogIn";
import { expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";

vi.mock("axios");

describe("LogIn", () => {
  //test for other form fields
  test("renders LogIn form Email Parent", () => {
    render(
      <MemoryRouter>
        <LogIn />
      </MemoryRouter>
    );

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Email...")).toBeInTheDocument();
  });

  test("renders LogIn form Password", () => {
    render(
      <MemoryRouter>
        <LogIn />
      </MemoryRouter>
    );

    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter Password...")
    ).toBeInTheDocument();
  });
  test("submits form with non-empty email and password fields", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <LogIn />
        </MemoryRouter>
      );
    });

    // Simulate user input
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");

    await act(async () => {
      await fireEvent.change(emailInput, {
        target: { value: "test@example.com" },
      });
      await fireEvent.change(passwordInput, {
        target: { value: "password123" },
      });
    });

    // Click the submit button
    await act(async () => {
      await fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    });

    // Check if axios.post is called with the expected data
    expect(axios.post).toHaveBeenCalledWith("/LogIn", {
      emailParent: "test@example.com",
      password: "password123",
    });

    // Check if navigate is not called (as the axios.post is mocked)
    expect(screen.queryByText("/parantpage")).toBeNull();
  });
  test("shows error toast if email or password is empty", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <LogIn />
        </MemoryRouter>
      );
    });

    // Click the submit button without entering any data
    await act(async () => {
      await fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    });
  });
});
