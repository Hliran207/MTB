import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { expect } from "vitest";
import "@testing-library/jest-dom";
import Music from "./Music";

describe("Music component", () => {
  //test1 ensures that the Music component
  //correctly renders the play button with the text content "Play".
  test("renders play button", () => {
    const { getByText } = render(<Music />);
    const playButton = getByText("Play");
    expect(playButton).toBeInTheDocument();
  });

  //test2 Verifies that clicking the play button alternates between play and pause states correctly.
  test("clicking play button toggles playback state", () => {
    const { getByText } = render(<Music />);
    const playButton = getByText("Play");
    fireEvent.click(playButton);
    expect(playButton.textContent).toBe("Pause");
    fireEvent.click(playButton);
    expect(playButton.textContent).toBe("Play");
  });
  //test3 Ensures that the audio element renders with the correct source URL.
  test("audio element renders with correct source", () => {
    const { container } = render(<Music />);
    const audioElement = container.querySelector("audio");
    expect(audioElement).toBeInTheDocument();
    expect(audioElement.src).toContain("music");
  });

  //test4 Ensures that the audio element is initially paused when the component is rendered.
  test("audio element is initially paused", () => {
    const { container } = render(<Music />);
    const audioElement = container.querySelector("audio");
    expect(audioElement.paused).toBe(true);
  });
});
