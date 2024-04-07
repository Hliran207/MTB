import ParentContactList from "./ParentContactList";
import React from "react";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import "@testing-library/jest-dom";

describe("ParentContactList component", () => {
  // Test that the main title is rendered correctly
  test("renders the main title correctly", () => {
    render(<ParentContactList />);
    expect(screen.getByText("הצגת מוקדים רלוונטיים")).toBeInTheDocument();
  });

  // Test that the "מוקדי סיוע נפשי" section is rendered correctly
  test('renders "מוקדי סיוע נפשי" section correctly', () => {
    render(<ParentContactList />);
    expect(screen.getByText("מוקדי סיוע נפשי")).toBeInTheDocument();
    expect(screen.getByText("עמותת אנוש – 074-755615")).toBeInTheDocument();
    expect(screen.getByText("עמותת אנוש – 074-755615")).toBeInTheDocument();
    expect(
      screen.getByText("מרכז חוסן ארצי טיפולי – *5486")
    ).toBeInTheDocument();
  });

  // Test that the "קופות חולים" section is rendered correctly
  test('renders "קופות חולים" section correctly', () => {
    render(<ParentContactList />);
    expect(screen.getByText("קופות חולים")).toBeInTheDocument();
    expect(screen.getByText("כללית תמיכה נפשית- *2708")).toBeInTheDocument();
    expect(screen.getByText("מכבי דרך תלם- *3028")).toBeInTheDocument();
    expect(
      screen.getByText("0722000272 -לאומית קו חירום תלם")
    ).toBeInTheDocument();
    expect(screen.getByText("מאוחדת מוקד ארצי- *3833")).toBeInTheDocument();
  });
});
