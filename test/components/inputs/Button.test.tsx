import { Button } from "@/components/inputs/Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

describe("Button", () => {
  it("renders the label", () => {
    render(<Button label="Click me" />);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button label="Submit" onClick={handleClick} />);
    await user.click(screen.getByRole("button", { name: "Submit" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when the disabled prop is true", () => {
    render(<Button label="Disabled" disabled={true} />);
    expect(screen.getByRole("button", { name: "Disabled" })).toBeDisabled();
  });

  it("applies the primary variant class by default", () => {
    render(<Button label="Primary" />);
    expect(screen.getByRole("button", { name: "Primary" })).toHaveClass("bg-primary");
  });

  it("applies the destructive variant class", () => {
    render(<Button label="Delete" variant="destructive" />);
    expect(screen.getByRole("button", { name: "Delete" })).toHaveClass("bg-destructive");
  });
});
