import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import GolfScoreTracker from "../components/organisms/scoreTracker.organism";

 
describe("GolfScoreTracker", () => {
  test("renders the form and submits data", async () => {
    // Render the component
    const { getByLabelText, getAllByRole, getByText } = render(<GolfScoreTracker />);

    // Fill in the form inputs
    fireEvent.change(getByLabelText("Round number:"), {
      target: { value: "1" },
    });
    fireEvent.change(getByLabelText("Course Name:"), {
      target: { value: "Sample Course" },
    });
    fireEvent.change(getByLabelText("NGF #:"), {
      target: { value: "123" },
    });
    fireEvent.change(getByLabelText("NGF # marker:"), {
      target: { value: "456" },
    });

    // Set scores for each hole
    fireEvent.change(getAllByRole("spinbutton")[0], {
      target: { value: "4" },
    });
    fireEvent.change(getAllByRole("spinbutton")[1], {
      target: { value: "3" },
    });
    // Add more fireEvent.change calls for the remaining holes

    // Mock the fetch request
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn(),
    });

    // Submit the form
    fireEvent.click(getByText("Submit"));

    // Wait for the form submission to finish
    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:3001/round/post",
        expect.objectContaining({
          method: "POST",
          body: JSON.stringify({
            id: "1",
            course_id: "Sample Course",
            golfer_id: "123",
            totalScore: expect.any(Number),
          }),
        })
      )
    );

    // Check if the success message is logged
    expect(console.log).toHaveBeenCalledWith("Form data sent successfully.");
  });
});
