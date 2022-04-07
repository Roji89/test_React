import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./counter";

describe("Counter", () => {
  describe('initialized with defaultCount=0 and description="My Counter"', () => {
    beforeEach(() => {
      render(<Counter defaultCount={2} description="My Counter" />);
    });

    it('renders "Current Count: 0"', () => {
      expect(screen.getByText("Current Count: 2")).toBeInTheDocument();
    });

    it('renders title as "MyCounter"', () => {
      expect(screen.getByText(/my counter/i)).toBeInTheDocument();
    });

    describe("when - is clicked", () => {
      beforeEach(() => {
        fireEvent.change(
          screen.getByLabelText("Incrementor:", { selector: "input" }),
          {
            target: { value: 5 },
          }
        );
      });

      it('renders "Current count: "', () => {
        fireEvent.click(screen.getByRole("button", { name: "Subtract" }));
        expect(screen.getByText("Current Count: -3")).toBeInTheDocument();
      });
      it('renders "Current count: "', () => {
        fireEvent.click(screen.getByRole("button", { name: "Add" }));
        expect(screen.getByText("Current Count: 7")).toBeInTheDocument();
      });
    });
  });
});
