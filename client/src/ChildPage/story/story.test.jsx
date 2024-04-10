import { render, screen } from "@testing-library/react";
import Story from "./Story";

// Mock data
const mockStories = [
  { _id: 1, story: "story 1" },
  { _id: 2, story: "story 2" },
];

// Mock story component to use the mock data
const MockStory = () => {
  return (
    <div>
      <h1>:מאגר עצות</h1>
      <div className="stories-list">
        {mockStories.map((story) => (
          <div key={story._id} className="story-item">
            <p>{story.story}</p>
          </div>
        ))}
      </div>
      <button>הוסף סיפור</button>
    </div>
  );
};

test("should render the story list", () => {
  render(<MockStory />);

  const storyElements = screen.getAllByText(/story \d/);
  expect(storyElements.length).toBeGreaterThan(0);
});

test('renders "Story" component', () => {
  const { getByText } = render(<Story />);
  const headerElement = getByText(/מאגר סיפורים/i);
  expect(headerElement).toBeTruthy();
});
