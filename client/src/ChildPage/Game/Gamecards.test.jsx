import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Gamecard from "./GameCards";

describe("Gamecard component", () => {
  it("renders without crashing", () => {
    render(
      <Gamecard
        onClick={() => {}}
        card={{ image: "/test.jpg" }}
        index={0}
        isInactive={false}
        isFlipped={false}
        isDisabled={false}
        isMatched={false}
      />
    );
  });

  it("calls onClick function when clicked if card is not flipped, not disabled, and not already matched", () => {
    const onClick = vitest.fn();
    const { getByTestId } = render(
      <Gamecard
        onClick={onClick}
        card={{ image: "/test.jpg" }}
        index={0}
        isInactive={false}
        isFlipped={false}
        isDisabled={false}
        isMatched={false}
      />
    );
    fireEvent.click(getByTestId("game-card"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
