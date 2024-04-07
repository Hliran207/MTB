import Advices from "./Advices";
import AddAdvice from "./AddAdvices";
import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { expect, vi } from "vitest";
import axios from "axios";
import "@testing-library/jest-dom";

describe("Advices component", () => {
  // Clear any existing mocks before each test
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Test that the main title is rendered correctly
  test("renders the main title correctly", () => {
    const { getByText } = render(<Advices />);
    expect(getByText(":מאגר עצות")).toBeTruthy();
  });

  // Test that the add advice form is rendered correctly
  test("renders add advice form", () => {
    const { getByPlaceholderText, getByText } = render(<AddAdvice />);
    const textarea = getByPlaceholderText("הכנס את העצה החדשה");
    const addButton = getByText("הוסף");
    expect(textarea).toBeTruthy();
    expect(addButton).toBeTruthy();
  });

  // Test that the remove button is rendered correctly
  test("renders remove button with correct text", async () => {
    // Mock the axios.get function to return a fake response
    const mockAdvices = [{ _id: "1", advice: "Advice 1" }];
    vi.spyOn(axios, "get").mockResolvedValue({ data: mockAdvices });

    // Render the Advices component
    const { getByText } = render(<Advices />);

    // Wait for the advice items to be rendered
    await waitFor(() => getByText("Advice 1"));

    // Check that the remove button is present
    const removeButton = getByText("הסר");
    expect(removeButton).toBeTruthy();
  });

  // Test that the advice content is rendered correctly
  test("renders the correct advice content", async () => {
    // Mock the axios.get function to return a fake response
    const mockAdvices = [
      { _id: "1", advice: "Advice 1" },
      { _id: "2", advice: "Advice 2" },
    ];
    vi.spyOn(axios, "get").mockResolvedValue({ data: mockAdvices });

    // Render the Advices component
    render(<Advices />);

    // Wait for the advice items to be rendered
    await waitFor(() => screen.getByText("Advice 1"));
    await waitFor(() => screen.getByText("Advice 2"));

    // Check that the advice content is rendered correctly
    expect(screen.getByText("Advice 1")).toBeInTheDocument();
    expect(screen.getByText("Advice 2")).toBeInTheDocument();
  });
});
