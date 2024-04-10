import Stories from "./Stories";
import AddStory from "./AddStories";
import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { expect, vi } from "vitest";
import axios from "axios";
import "@testing-library/jest-dom";

describe("Stories component", () => {
  // Clear any existing mocks before each test
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Test that the main title is rendered correctly
  test("renders the main title correctly", () => {
    const { getByText } = render(<Stories />);
    expect(getByText(":מאגר סיפורים")).toBeTruthy();
  });

  // Test that the add story form is rendered correctly
  test("renders add story form", () => {
    const { getByPlaceholderText, getByText } = render(<AddStory />);
    const textarea = getByPlaceholderText("הכנס סיפור חדש");
    const addButton = getByText("הוסף");
    expect(textarea).toBeTruthy();
    expect(addButton).toBeTruthy();
  });

  // Test that the remove button is rendered correctly
  test("renders remove button with correct text", async () => {
    // Mock the axios.get function to return a fake response
    const mockStories = [{ _id: "1", story: "Story 1" }];
    vi.spyOn(axios, "get").mockResolvedValue({ data: mockStories });

    // Render the stroies component
    const { getByText } = render(<Stories />);

    // Wait for the story items to be rendered
    await waitFor(() => getByText("Story 1"));

    // Check that the remove button is present
    const removeButton = getByText("הסר");
    expect(removeButton).toBeTruthy();
  });

  // Test that the story content is rendered correctly
  test("renders the correct advice content", async () => {
    // Mock the axios.get function to return a fake response
    const mockStories = [
      { _id: "1", story: "Story 1" },
      { _id: "2", story: "Story 2" },
    ];
    vi.spyOn(axios, "get").mockResolvedValue({ data: mockStories });

    // Render the stroies component
    render(<Stories />);

    // Wait for the story items to be rendered
    await waitFor(() => screen.getByText("Story 1"));
    await waitFor(() => screen.getByText("Story 2"));

    // Check that the story content is rendered correctly
    expect(screen.getByText("Story 1")).toBeInTheDocument();
    expect(screen.getByText("Story 2")).toBeInTheDocument();
  });
});
